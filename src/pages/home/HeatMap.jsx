import L from "leaflet";
import "leaflet.heat";
import { useEffect, useState, useMemo } from "react";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./styling/Map.css";

/* ------------------ Helpers ------------------ */

function weightFromIntensity(intensity) {
  switch (intensity?.toLowerCase()) {
    case "green":
      return 0.25;
    case "yellow":
      return 0.5;
    case "orange":
      return 0.75;
    case "red":
      return 1.0;
    default:
      return 0.25;
  }
}

/* -------- India bounds -------- */

const INDIA_BOUNDS = [
  [6.5, 68.0],
  [37.5, 97.5],
];

/* ---------------- Heatmap Layer ---------------- */

function HeatmapLayer({ data }) {
  const map = useMap();

  useEffect(() => {
    if (!map || !data?.length) return;

    const points = data
      .filter((r) => r.lat && r.lon)
      .map((r) => [
        Number(r.lat),
        Number(r.lon),
        weightFromIntensity(r.intensity),
      ]);

    const heatLayer = L.heatLayer(points, {
      radius: 42,
      blur: 26,
      minOpacity: 0.55,
      gradient: {
        0.25: "#2f855a",
        0.5: "#d69e2e",
        0.75: "#dd6b20",
        1.0: "#c53030",
      },
    });

    heatLayer.addTo(map);
    return () => map.removeLayer(heatLayer);
  }, [map, data]);

  return null;
}

/* ---------------- MAIN COMPONENT ---------------- */

export default function HeatMap() {
  const [outbreaks, setOutbreaks] = useState([]);
  const [explanations, setExplanations] = useState({});
  const [tips, setTips] = useState({});
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /* -------- Data Load -------- */

  useEffect(() => {
    const load = async () => {
      try {
        const [o, e, t] = await Promise.all([
          fetch("/data/map_outbreaks.json"),
          fetch("/data/city_date_explanations.json"),
          fetch("/data/health_tips.json"),
        ]);

        setOutbreaks(await o.json());
        setExplanations(await e.json());
        setTips(await t.json());
      } catch {
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const selectedKey = useMemo(() => {
    if (!selected) return null;
    return `${selected.city.toLowerCase()}|${selected.state.toLowerCase()}|${selected.date}`;
  }, [selected]);

  const explanation = selectedKey ? explanations[selectedKey] : null;
  const topDisease = explanation?.top_diseases?.[0]?.[0];
  const selectedTip = topDisease ? tips[topDisease] : null;

  /* -------- Map Fly -------- */

  const MapUpdater = () => {
    const map = useMap();

    useEffect(() => {
      if (selected?.lat && selected?.lon) {
        map.flyTo([+selected.lat, +selected.lon], 9, { duration: 1.2 });
      }
    }, [selected, map]);

    return null;
  };

  /* -------- Loading / Error -------- */

  if (loading) {
    return (
      <div style={styles.centered}>
        <h3>Loading outbreak data…</h3>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ ...styles.centered, color: "crimson" }}>
        <h3>{error}</h3>
      </div>
    );
  }

  /* ---------------- RENDER ---------------- */

  return (
    <div style={styles.wrapper}>
      {/* MAP */}
      <div style={styles.mapPane}>
        <MapContainer
          center={[22.5937, 78.9629]}
          zoom={5}
          minZoom={4}
          maxZoom={12}
          bounds={INDIA_BOUNDS}
          maxBounds={INDIA_BOUNDS}
          maxBoundsViscosity={1}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution="&copy; OpenStreetMap"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <HeatmapLayer data={outbreaks} />
          <MapUpdater />

          {outbreaks.map((r, i) => (
            <CircleMarker
              key={i}
              center={[+r.lat, +r.lon]}
              radius={18}
              pathOptions={{ opacity: 0, fillOpacity: 0 }}
              eventHandlers={{ click: () => setSelected(r) }}
            >
              <Popup>
                <b>{r.city}, {r.state}</b>
                <br />Date: {r.date}
                <br />Z-score: {Number(r.z_score).toFixed(2)}
              </Popup>
            </CircleMarker>
          ))}
          <div className="map-legend">
          <div className="legend-item">
            <span className="legend-dot green" />
            Normal
          </div>
          <div className="legend-item">
            <span className="legend-dot yellow" />
            Watch
          </div>
          <div className="legend-item">
            <span className="legend-dot orange" />
            Warning
          </div>
          <div className="legend-item">
            <span className="legend-dot red" />
            High Risk
          </div>
        </div>

        </MapContainer>
      </div>

      {/* SIDE PANEL */}
      <div style={styles.sidePane}>
        {!selected ? (
          <div className="empty-panel">
            <div className="empty-card">
              <div className="pulse-dot" />
              <h2>Health Signals Map</h2>
              <p>Click any hotspot to explore details.</p>
            </div>
          </div>
        ) : (
          <div className="detail-card">
            <h2>{selected.city}, {selected.state}</h2>
            <p className="meta">
              Date: {selected.date} • Z-score: {Number(selected.z_score).toFixed(2)}
            </p>

            {explanation && (
              <>
                <h3 className="section-title">Why flagged</h3>
                <ul>
                  {explanation.top_symptoms?.map(([s], i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </>
            )}

            <h3 className="section-title">
              Health Advice {topDisease && `— ${topDisease}`}
            </h3>

            {selectedTip ? (
              <ul>
                {selectedTip.dos?.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            ) : (
              <p>No advice available.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------------- Styles ---------------- */

const styles = {
  wrapper: {
    display: "flex",
    height: "90vh",
    fontFamily: "system-ui, sans-serif",
  },
  mapPane: {
    flex: 3,
  },
  sidePane: {
    flex: 2,
    padding: 20,
    background: "#f9f9f9",
    borderLeft: "1px solid #ddd",
    overflowY: "auto",
  },
  centered: {
    height: "90vh",
    display: "grid",
    placeItems: "center",
  },
};
