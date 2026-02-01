import { useEffect, useState, useMemo, useCallback } from "react";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css"; // ← almost always forgotten

function colorFromIntensity(intensity) {
  const map = {
    red: "red",
    orange: "orange",
    yellow: "gold",
    green: "green",
  };
  return map[intensity?.toLowerCase()] || "gray";
}

// Small helper to normalize date key (very important!)
function normalizeDateKey(dateStr) {
  if (!dateStr) return "";
  // Convert 2025-3-9 → 2025-03-09  or 2025/3/9 → 2025-03-09 etc.
  try {
    const d = new Date(dateStr);
    if (isNaN(d)) return dateStr.toLowerCase();
    return d.toISOString().slice(0, 10); // always YYYY-MM-DD
  } catch {
    return dateStr.toLowerCase();
  }
}

export default function DiseaseOutbreaksMap() {
  const [outbreaks, setOutbreaks] = useState([]);
  const [explanations, setExplanations] = useState({});
  const [tips, setTips] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState(null);

  // Load all data once
  useEffect(() => {
    const controller = new AbortController();

    const load = async () => {
      try {
        setLoading(true);
        setError(null);

        const [outbreaksRes, expRes, tipsRes] = await Promise.all([
          fetch("/data/map_outbreaks.json", { signal: controller.signal }),
          fetch("/data/city_date_explanations.json", {
            signal: controller.signal,
          }),
          fetch("/data/health_tips.json", { signal: controller.signal }),
        ]);

        if (!outbreaksRes.ok || !expRes.ok || !tipsRes.ok) {
          throw new Error("One or more data files failed to load");
        }

        const [outbreakData, expData, tipsData] = await Promise.all([
          outbreaksRes.json(),
          expRes.json(),
          tipsRes.json(),
        ]);

        setOutbreaks(outbreakData);
        setExplanations(expData);
        setTips(tipsData);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    load();

    return () => controller.abort();
  }, []);

  const selectedKey = useMemo(() => {
    if (!selected) return null;
    const datePart = normalizeDateKey(selected.date);
    return `${selected.city.toLowerCase()}|${selected.state.toLowerCase()}|${datePart}`;
  }, [selected]);

  const explanation = selectedKey ? explanations[selectedKey] : null;

  const topDisease = useMemo(() => {
    if (!explanation?.top_diseases?.length) return null;
    return explanation.top_diseases[0][0];
  }, [explanation]);

  const selectedTip = topDisease ? tips[topDisease] : null;

  // Optional: center map on selected city
  const MapUpdater = () => {
    const map = useMap();
    useEffect(() => {
      if (selected?.lat && selected?.lon) {
        map.flyTo([Number(selected.lat), Number(selected.lon)], 10, {
          duration: 1.2,
        });
      }
    }, [selected]);
    return null;
  };

  if (loading) {
    return (
      <div style={{ height: "90vh", display: "grid", placeItems: "center" }}>
        <h3>Loading outbreak data...</h3>
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          height: "90vh",
          display: "grid",
          placeItems: "center",
          color: "crimson",
        }}
      >
        <h3>Error loading data: {error}</h3>
        <p>Please check console and data file paths.</p>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        height: "90vh",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {/* MAP */}
      <div style={{ flex: 3, minWidth: 0 }}>
        <MapContainer
          center={[22.5937, 78.9629]}
          zoom={5}
          style={{ height: "100%", width: "100%" }}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <MapUpdater />

          {outbreaks.map((record, idx) => (
            <CircleMarker
              key={idx}
              center={[Number(record.lat), Number(record.lon)]}
              radius={record.intensity === "red" ? 11 : 8}
              pathOptions={{
                color: colorFromIntensity(record.intensity),
                fillColor: colorFromIntensity(record.intensity),
                fillOpacity: 0.7,
                weight: record.intensity === "red" ? 3 : 1,
              }}
              eventHandlers={{
                click: () => setSelected(record),
              }}
            >
              <Popup>
                <b>
                  {record.city}, {record.state}
                </b>
                <br />
                Date: {record.date}
                <br />
                Z-score: {Number(record.z_score).toFixed(2)}
              </Popup>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>

      {/* SIDE PANEL */}
      <div
        style={{
          flex: 2,
          padding: "20px",
          overflowY: "auto",
          background: "#f9f9f9",
          borderLeft: "1px solid #ddd",
        }}
      >
        {!selected ? (
          <div style={{ textAlign: "center", marginTop: "40%" }}>
            <h3>Click a marker to view outbreak details</h3>
          </div>
        ) : (
          <>
            <h2>
              {selected.city}, {selected.state}
            </h2>
            <p>
              <b>Date:</b> {selected.date} • Z-score:{" "}
              {Number(selected.z_score).toFixed(2)}
            </p>

            {explanation ? (
              <>
                <h3>Why this outbreak was flagged</h3>

                <details open>
                  <summary>Top Symptoms</summary>
                  <ul>
                    {explanation.top_symptoms?.map(([symptom, score], i) => (
                      <li key={i}>
                        {symptom} — {score.toFixed(2)}
                      </li>
                    )) || <li>No symptom data</li>}
                  </ul>
                </details>

                <details open>
                  <summary>Most likely diseases</summary>
                  <ul>
                    {explanation.top_diseases?.map(([disease, score], i) => (
                      <li key={i}>
                        {disease} — {score.toFixed(2)}
                      </li>
                    )) || <li>No disease ranking available</li>}
                  </ul>
                </details>

                {explanation.sample_messages?.length > 0 && (
                  <details>
                    <summary>Sample user messages</summary>
                    <ul style={{ fontSize: "0.95em", color: "#444" }}>
                      {explanation.sample_messages.map((msg, i) => (
                        <li key={i}>“{msg}”</li>
                      ))}
                    </ul>
                  </details>
                )}
              </>
            ) : (
              <p style={{ color: "orange" }}>
                No detailed explanation available for this date/location.
              </p>
            )}

            <hr style={{ margin: "20px 0" }} />

            <h3>Health Advice {topDisease ? `— ${topDisease}` : ""}</h3>

            {selectedTip ? (
              <>
                <h4>{selectedTip.title}</h4>

                <b style={{ color: "#2c7a2c" }}>Do’s</b>
                <ul>
                  {selectedTip.dos?.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <b style={{ color: "#c53030" }}>Don’ts</b>
                <ul>
                  {selectedTip.donts?.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <b>Seek medical help if</b>
                <ul>
                  {selectedTip.seek_help?.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </>
            ) : (
              <p>
                No specific health tips available for the top suspected
                condition.
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
