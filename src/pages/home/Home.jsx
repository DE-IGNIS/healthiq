import { Link } from "react-router-dom";
import "../styling/Home.css";

function Home() {
  return (
    <>
      <div>
        <h1 className="page-title">This is the home page</h1>

        <div className="container">
          <div className="card">
            <Link className="feature-link" to="feature1">
              <h2>Feature 1</h2>
              <p>Use this feature 1 to explore our website</p>
            </Link>
          </div>

          <div className="card">
            <Link className="feature-link" to="feature2">
              <h2>Feature 2</h2>
              <p>Use this Feature 2 to explore our website</p>
            </Link>
          </div>
          <div className="card">
            <Link className="feature-link" to="feature3">
              <h2>Feature 3</h2>
              <p>Use this Feature 3 to explore our website</p>
            </Link>
          </div>
          <div className="card">
            <Link className="feature-link" to="feature4">
              <h2>Diet Plan Generator</h2>
              <p>AI enhanced diet plannner/generator</p>
            </Link>
          </div>
          <div className="card">
            <h2>Feature 5</h2>
            <p>Use this feature 5 to explore our website</p>
          </div>
          <div className="card">
            <h2>Feature 6</h2>
            <p>Use this feature 6 to explore our website</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
