// Single-file version: App.jsx (or App.js)
// All backend/server code removed — now it's pure client-side React

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
      const GEMINI_API_KEY = "AIzaSyChe50xw7CunpqzKz9JogjqCOYYi0M7oXM";
      if (!GEMINI_API_KEY) {
        setError("API key is missing. Check .env file.");
        return;
      }
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-8b:generateContent?key=${GEMINI_API_KEY}`,
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
                    text: `You are a food ingredient explainer.\n\nIMPORTANT: Return ONLY raw JSON (no markdown, no backticks, no extra words).\n\nIngredient: "${q}"\n\nReturn ONLY valid JSON with exactly these keys:\n{\n  "ingredient": string,\n  "what_it_is": string,\n  "natural_or_artificial": "natural"|"artificial"|"both"|"unknown",\n  "risk_level": "low"|"medium"|"high"|"unknown",\n  "why_risk_level": string,\n  "who_should_limit_or_avoid": string[],\n  "common_uses": string[],\n  "summary_for_user": string\n}\n\nRules:\n- Be balanced and cautious. If unclear, use "unknown".\n- Keep it short, beginner-friendly.`,
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
        setError(`API error ${res.status}: ${errText.slice(0, 200)}`);
        return;
      }

      const json = await res.json();

      setData(json);
    } catch (e) {
      setError(
        "Could not connect to the service. Check your backend or network.",
      );
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") search();
  };

  return (
    <div className="page">
      <div className="container">
        <header className="header">
          <h1 className="title">Ingredient Safety Checker</h1>
          <p className="subtitle">
            Search an ingredient to learn what it is, whether it’s
            natural/artificial, and basic risk notes.
          </p>
        </header>

        <div className="card">
          <div className="searchRow">
            <input
              className="input"
              value={ingredient}
              onChange={(e) => setIngredient(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="e.g. Dextrose, Maltodextrin, MSG"
            />
            <button className="button" onClick={search} disabled={loading}>
              {loading ? "Checking..." : "Search"}
            </button>
          </div>

          {error && <div className="alert error">{error}</div>}

          {data && !data.raw && (
            <div className="result">
              <h2 className="resultTitle">{data.ingredient}</h2>

              <div className="grid">
                <div className="field">
                  <div className="label">What it is</div>
                  <div className="value">{data.what_it_is}</div>
                </div>

                <div className="field">
                  <div className="label">Natural / Artificial</div>
                  <div className="value pill">{data.natural_or_artificial}</div>
                </div>

                <div className="field">
                  <div className="label">Risk level</div>
                  <div className="value pill">{data.risk_level}</div>
                </div>

                <div className="field">
                  <div className="label">Why</div>
                  <div className="value">{data.why_risk_level}</div>
                </div>

                <div className="field">
                  <div className="label">Common uses</div>
                  <ul className="list">
                    {(data.common_uses || []).map((x, i) => (
                      <li key={i}>{x}</li>
                    ))}
                  </ul>
                </div>

                <div className="field">
                  <div className="label">Who should limit/avoid</div>
                  <ul className="list">
                    {(data.who_should_limit_or_avoid || []).map((x, i) => (
                      <li key={i}>{x}</li>
                    ))}
                  </ul>
                </div>

                <div className="field">
                  <div className="label">Summary</div>
                  <div className="value">{data.summary_for_user}</div>
                </div>
              </div>
            </div>
          )}

          {data && data.raw && (
            <div className="alert warn">
              <div>
                <b>Model response wasn’t clean JSON.</b>
              </div>
              <pre className="raw">{data.raw}</pre>
            </div>
          )}
        </div>

        <footer className="footer">
          <span>
            Tip: press <b>Enter</b> to search
          </span>
        </footer>
      </div>
    </div>
  );
}
