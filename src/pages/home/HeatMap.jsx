// import { useEffect, useState, useMemo } from "react";
// import {
//   MapContainer,
//   TileLayer,
//   CircleMarker,
//   Popup,
//   useMap,
// } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import "./styling/Map.css"; // expanded styles below

// function colorFromIntensity(intensity) {
//   const colorMap = {
//     red: "#ef4444",
//     orange: "#f97316",
//     yellow: "#eab308",
//     green: "#22c55e",
//   };
//   return colorMap[intensity?.toLowerCase()] || "#6b7280";
// }

// function normalizeDateKey(dateStr) {
//   if (!dateStr) return "";
//   try {
//     const d = new Date(dateStr);
//     if (isNaN(d.getTime())) return dateStr.toLowerCase();
//     return d.toISOString().slice(0, 10);
//   } catch {
//     return dateStr.toLowerCase();
//   }
// }

// function HeatMap() {
//   const [outbreaks, setOutbreaks] = useState([]);
//   const [explanations, setExplanations] = useState({});
//   const [tips, setTips] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedOutbreak, setSelectedOutbreak] = useState(null);
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   // Data loading (unchanged logic, cleaner naming)
//   useEffect(() => {
//     const controller = new AbortController();
//     const loadData = async () => {
//       try {
//         setLoading(true);
//         setError(null);
//         const [outbreaksRes, expRes, tipsRes] = await Promise.all([
//           fetch("/data/map_outbreaks.json", { signal: controller.signal }),
//           fetch("/data/city_date_explanations.json", {
//             signal: controller.signal,
//           }),
//           fetch("/data/health_tips.json", { signal: controller.signal }),
//         ]);
//         if (!outbreaksRes.ok || !expRes.ok || !tipsRes.ok) {
//           throw new Error("Failed to load one or more data files");
//         }
//         const [outbreakData, expData, tipsData] = await Promise.all([
//           outbreaksRes.json(),
//           expRes.json(),
//           tipsRes.json(),
//         ]);
//         setOutbreaks(outbreakData);
//         setExplanations(expData);
//         setTips(tipsData);
//       } catch (err) {
//         if (err.name !== "AbortError") setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     loadData();
//     return () => controller.abort();
//   }, []);

//   const selectedKey = useMemo(() => {
//     if (!selectedOutbreak) return null;
//     const datePart = normalizeDateKey(selectedOutbreak.date);
//     return `${selectedOutbreak.city.toLowerCase()}|${selectedOutbreak.state.toLowerCase()}|${datePart}`;
//   }, [selectedOutbreak]);

//   const selectedExplanation = selectedKey ? explanations[selectedKey] : null;
//   const topSuspectedDisease =
//     selectedExplanation?.top_diseases?.[0]?.[0] ?? null;
//   const healthTip = topSuspectedDisease ? tips[topSuspectedDisease] : null;

//   // Map fly-to on selection
//   const MapCenterUpdater = () => {
//     const map = useMap();
//     useEffect(() => {
//       if (selectedOutbreak?.lat && selectedOutbreak?.lon) {
//         map.flyTo(
//           [Number(selectedOutbreak.lat), Number(selectedOutbreak.lon)],
//           10,
//           { duration: 1.2 },
//         );
//       }
//     }, [selectedOutbreak, map]);
//     return null;
//   };

//   if (loading)
//     return (
//       <div className="outbreaks-loading">
//         <h3>Loading outbreak insights...</h3>
//       </div>
//     );
//   if (error)
//     return (
//       <div className="outbreaks-error">
//         <h3>Error: {error}</h3>
//         <p>Check data files or network.</p>
//       </div>
//     );

//   return (
//     <div className={`outbreaks-layout ${isDarkMode ? "dark-mode" : ""}`}>
//       {/* Header / Controls */}
//       <header className="outbreaks-header">
//         <h1>Disease Outbreak Monitor</h1>
//         <button
//           className="theme-toggle"
//           onClick={() => setIsDarkMode((prev) => !prev)}
//           aria-label="Toggle dark mode"
//         >
//           {isDarkMode ? "☀️ Light" : "🌙 Dark"}
//         </button>
//       </header>

//       <div className="outbreaks-main">
//         {/* Map */}
//         <div className="outbreaks-map-container">
//           <MapContainer
//             center={[22.5937, 78.9629]}
//             zoom={5}
//             scrollWheelZoom={true}
//             className="outbreaks-leaflet-map"
//           >
//             <TileLayer
//               // Modern, clean, light basemap – great contrast for colored markers
//               url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
//               attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
//             />

//             {/* Alternative dark-ready: https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png */}

//             <MapCenterUpdater />

//             {outbreaks.map((record, idx) => (
//               <CircleMarker
//                 key={idx}
//                 center={[Number(record.lat), Number(record.lon)]}
//                 radius={
//                   record.intensity === "red"
//                     ? 14
//                     : record.intensity === "orange"
//                       ? 11
//                       : 8
//                 }
//                 pathOptions={{
//                   color: colorFromIntensity(record.intensity),
//                   fillColor: colorFromIntensity(record.intensity),
//                   fillOpacity: 0.75,
//                   weight: record.intensity === "red" ? 4 : 2,
//                 }}
//                 eventHandlers={{ click: () => setSelectedOutbreak(record) }}
//                 className={`outbreak-marker outbreak-marker--${record.intensity?.toLowerCase() || "unknown"}`}
//               >
//                 <Popup className="outbreak-popup">
//                   <div className="popup-inner">
//                     <h3>
//                       {record.city}, {record.state}
//                     </h3>
//                     <p className="popup-date">Date: {record.date}</p>
//                     <p>
//                       Z-score:{" "}
//                       <strong>{Number(record.z_score).toFixed(2)}</strong>
//                     </p>
//                   </div>
//                 </Popup>
//               </CircleMarker>
//             ))}
//           </MapContainer>
//         </div>

//         {/* Sidebar */}
//         <aside className="outbreaks-sidebar">
//           {!selectedOutbreak ? (
//             <div className="sidebar-welcome">
//               <h2>Welcome</h2>
//               <p>
//                 Click any outbreak marker on the map to explore details,
//                 explanations, and health recommendations.
//               </p>
//               <div className="legend">
//                 <h4>Outbreak Intensity</h4>
//                 <div className="legend-item">
//                   <span className="dot red"></span> High concern (Red)
//                 </div>
//                 <div className="legend-item">
//                   <span className="dot orange"></span> Elevated (Orange)
//                 </div>
//                 <div className="legend-item">
//                   <span className="dot yellow"></span> Moderate (Yellow)
//                 </div>
//                 <div className="legend-item">
//                   <span className="dot green"></span> Low (Green)
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <div className="outbreak-detail">
//               <h2>
//                 {selectedOutbreak.city}, {selectedOutbreak.state}
//               </h2>
//               <p className="detail-meta">
//                 <span>Date: {selectedOutbreak.date}</span>
//                 <span>
//                   Z-score: {Number(selectedOutbreak.z_score).toFixed(2)}
//                 </span>
//               </p>

//               {selectedExplanation ? (
//                 <div className="explanation-section">
//                   <h3>Why this was flagged</h3>

//                   <details open>
//                     <summary>Top Symptoms</summary>
//                     <ul className="symptom-list">
//                       {selectedExplanation.top_symptoms?.map(
//                         ([sym, score], i) => (
//                           <li key={i}>
//                             {sym} <span>{score.toFixed(2)}</span>
//                           </li>
//                         ),
//                       ) || <li>No data</li>}
//                     </ul>
//                   </details>

//                   <details open>
//                     <summary>Likely Diseases</summary>
//                     <ul className="disease-list">
//                       {selectedExplanation.top_diseases?.map(
//                         ([dis, score], i) => (
//                           <li key={i}>
//                             {dis} <span>{score.toFixed(2)}</span>
//                           </li>
//                         ),
//                       ) || <li>No ranking</li>}
//                     </ul>
//                   </details>

//                   {selectedExplanation.sample_messages?.length > 0 && (
//                     <details>
//                       <summary>Sample Reports</summary>
//                       <ul className="sample-messages">
//                         {selectedExplanation.sample_messages.map((msg, i) => (
//                           <li key={i}>“{msg}”</li>
//                         ))}
//                       </ul>
//                     </details>
//                   )}
//                 </div>
//               ) : (
//                 <p className="no-data">
//                   No detailed analysis available for this location/date.
//                 </p>
//               )}

//               <hr className="divider" />

//               <div className="health-advice">
//                 <h3>
//                   Health Guidance{" "}
//                   {topSuspectedDisease ? ` — ${topSuspectedDisease}` : ""}
//                 </h3>
//                 {healthTip ? (
//                   <>
//                     <h4>{healthTip.title}</h4>
//                     <div className="advice dos">
//                       <strong>Do’s</strong>
//                       <ul>
//                         {healthTip.dos?.map((item, i) => (
//                           <li key={i}>{item}</li>
//                         ))}
//                       </ul>
//                     </div>
//                     <div className="advice donts">
//                       <strong>Don’ts</strong>
//                       <ul>
//                         {healthTip.donts?.map((item, i) => (
//                           <li key={i}>{item}</li>
//                         ))}
//                       </ul>
//                     </div>
//                     <div className="advice seek">
//                       <strong>Seek help if</strong>
//                       <ul>
//                         {healthTip.seek_help?.map((item, i) => (
//                           <li key={i}>{item}</li>
//                         ))}
//                       </ul>
//                     </div>
//                   </>
//                 ) : (
//                   <p className="no-data">
//                     No tailored advice for the primary suspected condition.
//                   </p>
//                 )}
//               </div>
//             </div>
//           )}
//         </aside>
//       </div>
//     </div>
//   );
// }

// export default HeatMap;

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
