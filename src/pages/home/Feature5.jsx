// import { useState } from "react";
// import "./styling/Feature5.css";
// import { da } from "zod/v4/locales";

// export default function Feature5() {
//   const [ingredient, setIngredient] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [data, setData] = useState(null);
//   const [error, setError] = useState("");

//   const search = async () => {
//     setError("");
//     setData(null);

//     const q = ingredient.trim();
//     if (!q) {
//       setError("Please enter an ingredient name.");
//       return;
//     }

//     try {
//       setLoading(true);
//       const GEMINI_API_KEY = "AIzaSyAGuPM9tGEtNv-fCJ9gDvY97jVP7B2QVuk";
//       if (!GEMINI_API_KEY) {
//         setError("API key is missing. Check .env file.");
//         return;
//       }
//       const res = await fetch(
//         `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             contents: [
//               {
//                 parts: [
//                   {
//                     text: `You are a food ingredient explainer.\n\nIMPORTANT: Return ONLY raw JSON (no markdown, no backticks, no extra words).\n\nIngredient: "${q}"\n\nReturn ONLY valid JSON with exactly these keys:\n{\n  "ingredient": string,\n  "what_it_is": string,\n  "natural_or_artificial": "natural"|"artificial"|"both"|"unknown",\n  "risk_level": "low"|"medium"|"high"|"unknown",\n  "why_risk_level": string,\n  "who_should_limit_or_avoid": string[],\n  "common_uses": string[],\n  "summary_for_user": string\n}\n\nRules:\n- Be balanced and cautious. If unclear, use "unknown".\n- Keep it short, beginner-friendly.`,
//                   },
//                 ],
//               },
//             ],
//             generationConfig: {
//               temperature: 0.2,
//               responseMimeType: "application/json",
//             },
//           }),
//         },
//       );

//       if (!res.ok) {
//         const errText = await res.text();
//         setError(`API error ${res.status}: ${errText.slice(0, 200)}`);
//         return;
//       }

//       const json = await res.json();
//       console.log(json);
//       setData(json);
//     } catch (e) {
//       setError(
//         "Could not connect to the service. Check your backend or network.",
//       );
//       console.error(e);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const onKeyDown = (e) => {
//     if (e.key === "Enter") search();
//   };

//   return (
//     <div className="ingredient-page">
//       <div className="ingredient-container">
//         <header className="ingredient-header">
//           <h1 className="ingredient-title">Ingredient Safety Checker</h1>
//           <p className="ingredient-subtitle">
//             Search an ingredient to learn what it is, whether it’s
//             natural/artificial, and basic risk notes.
//           </p>
//         </header>

//         <div className="ingredient-card">
//           <div className="ingredient-searchRow">
//             <input
//               className="ingredient-input"
//               value={ingredient}
//               onChange={(e) => setIngredient(e.target.value)}
//               onKeyDown={onKeyDown}
//               placeholder="e.g. Dextrose, Maltodextrin, MSG"
//             />
//             <button
//               className="ingredient-button"
//               onClick={search}
//               disabled={loading}
//             >
//               {loading ? "Checking..." : "Search"}
//             </button>
//           </div>

//           {error && <div className="alert error">{error}</div>}

//           {data && !data.raw && (
//             <div className="ingredient-result">
//               <h2 className="ingredient-resultTitle">{data.ingredient}</h2>

//               <div className="ingredient-grid">
//                 <div className="ingredient-field">
//                   <div className="ingredient-label">What it is</div>
//                   <div className="ingredient-value">{data.what_it_is}</div>
//                 </div>

//                 <div className="ingredient-field">
//                   <div className="ingredient-label">Natural / Artificial</div>
//                   <div className="ingredient-value pill">
//                     {data.natural_or_artificial}
//                   </div>
//                 </div>

//                 <div className="ingredient-field">
//                   <div className="ingredient-label">Risk level</div>
//                   <div className="ingredient-value pill">{data.risk_level}</div>
//                 </div>

//                 <div className="ingredient-field">
//                   <div className="ingredient-label">Why</div>
//                   <div className="ingredient-value">{data.why_risk_level}</div>
//                 </div>

//                 <div className="ingredient-field">
//                   <div className="ingredient-label">Common uses</div>
//                   <ul className="ingredient-list">
//                     {(data.common_uses || []).map((x, i) => (
//                       <li key={i}>{x}</li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div className="ingredient-field">
//                   <div className="ingredient-label">Who should limit/avoid</div>
//                   <ul className="ingredient-list">
//                     {(data.who_should_limit_or_avoid || []).map((x, i) => (
//                       <li key={i}>{x}</li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div className="ingredient-field">
//                   <div className="ingredient-label">Summary</div>
//                   <div className="ingredient-value">
//                     {data.summary_for_user}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}

//           {data && data.raw && (
//             <div className="alert warn">
//               <div>
//                 <b>Model response wasn’t clean JSON.</b>
//               </div>
//               <pre className="raw">{data.raw}</pre>
//             </div>
//           )}
//         </div>

//         <footer className="ingredient-footer">
//           <span>
//             Tip: press <b>Enter</b> to search
//           </span>
//         </footer>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import "./styling/Feature5.css";

export default function Feature5() {
  const [ingredient, setIngredient] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const search = async () => {
    setError("");
    setData(null);

    const q = ingredient.trim();
    if (!q) {
      setError("Please enter an ingredient name.");
      return;
    }

    try {
      setLoading(true);

      // const GEMINI_API_KEY = "AIzaSyAGuPM9tGEtNv-fCJ9gDvY97jVP7B2QVuk"; // ← never commit this! leaked
      const GEMINI_API_KEY = "AIzaSyC3QxMFtWO6pCQtK5pswCldS0TLwWm7jlQ"; // ← never commit this!

      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `You are a food ingredient explainer.

IMPORTANT: Return ONLY raw JSON (no markdown, no backticks, no extra words, no explanation).

Ingredient: "${q}"

Return ONLY valid JSON with exactly these keys:
{
  "ingredient": string,
  "what_it_is": string,
  "natural_or_artificial": "natural"|"artificial"|"both"|"unknown",
  "risk_level": "low"|"medium"|"high"|"unknown",
  "why_risk_level": string,
  "who_should_limit_or_avoid": string[],
  "common_uses": string[],
  "summary_for_user": string
}

Rules:
- Be balanced and cautious. If unclear, use "unknown".
- Keep answers short, beginner-friendly.`,
                  },
                ],
              },
            ],
            generationConfig: {
              temperature: 0.2,
              responseMimeType: "application/json",
            },
          }),
        },
      );

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(`API error ${res.status}: ${errText.slice(0, 300)}`);
      }

      const json = await res.json();

      // ── Most important part ────────────────────────────────────────
      let resultText = json?.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!resultText) {
        throw new Error("No content returned from model");
      }

      // Sometimes Gemini still wraps it in ```json ... ```
      resultText = resultText
        .replace(/^```json\s*/, "")
        .replace(/```$/, "")
        .trim();

      const parsed = JSON.parse(resultText);

      setData(parsed);
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to fetch ingredient information");
    } finally {
      setLoading(false);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };

  return (
    <div className="ingredient-page">
      <div className="ingredient-container">
        <header className="ingredient-header">
          <h1 className="ingredient-title">Ingredient Safety Checker</h1>
          <p className="ingredient-subtitle">
            Search an ingredient to learn what it is, whether it’s
            natural/artificial, and basic risk notes.
          </p>
        </header>

        <div className="ingredient-card">
          <div className="ingredient-searchRow">
            <input
              className="ingredient-input"
              value={ingredient}
              onChange={(e) => setIngredient(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="e.g. Dextrose, Maltodextrin, MSG"
            />
            <button
              className="ingredient-button"
              onClick={search}
              disabled={loading}
            >
              {loading ? "Checking..." : "Search"}
            </button>
          </div>

          {error && <div className="alert error">{error}</div>}

          {data && (
            <div className="ingredient-result">
              <h2 className="ingredient-resultTitle">{data.ingredient}</h2>

              <div className="ingredient-grid">
                <div className="ingredient-field">
                  <div className="ingredient-label">What it is</div>
                  <div className="ingredient-value">{data.what_it_is}</div>
                </div>

                <div className="ingredient-field">
                  <div className="ingredient-label">Natural / Artificial</div>
                  <div className="ingredient-value pill">
                    {data.natural_or_artificial}
                  </div>
                </div>

                <div className="ingredient-field">
                  <div className="ingredient-label">Risk level</div>
                  <div className="ingredient-value pill">{data.risk_level}</div>
                </div>

                <div className="ingredient-field">
                  <div className="ingredient-label">Why</div>
                  <div className="ingredient-value">{data.why_risk_level}</div>
                </div>

                <div className="ingredient-field">
                  <div className="ingredient-label">Common uses</div>
                  <ul className="ingredient-list">
                    {(data.common_uses || []).map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="ingredient-field">
                  <div className="ingredient-label">Who should limit/avoid</div>
                  <ul className="ingredient-list">
                    {(data.who_should_limit_or_avoid || []).map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="ingredient-field full-width">
                  <div className="ingredient-label">Summary</div>
                  <div className="ingredient-value">
                    {data.summary_for_user}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <footer className="ingredient-footer">
          <span>
            Tip: press <b>Enter</b> to search
          </span>
        </footer>
      </div>
    </div>
  );
}
