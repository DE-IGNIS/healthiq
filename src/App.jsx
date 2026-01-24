import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Content from "./pages/Content";
import About from "./pages/About";
import Landing from "./pages/Landing";
// unused import may need in future
// import Navbar from "./components/Navbar";
import Join from "./pages/Join";
import { Feature1, Feature2, Feature3, Feature4 } from "./pages/home";
import Layout from "./layouts/Layout";

function App() {
  return (
    <>
    {/* unused navbar may need in future */}
      {/* <Navbar /> */}
      <Routes>
        <Route element={<Layout />}>
          {/* Landing Page route  */}
          <Route path="/" element={<Landing />} />

          {/* Home Page route  */}
          <Route path="/home" element={<Home />} />

          {/* Home - feature 1  Page route  */}
          <Route path="/home/feature1" element={<Feature1 />} />

          {/* Home - feature 2 Page route  */}
          <Route path="/home/feature2" element={<Feature2 />} />

          {/* Home - feature 3 Page route  */}
          <Route path="/home/feature3" element={<Feature3 />} />

          {/* Home - feature 4 Page route  */}
          <Route path="/home/feature4" element={<Feature4 />} />

          {/* Content Page route  */}
          <Route path="/content" element={<Content />} />

          {/* About Page route  */}
          <Route path="/about" element={<About />} />
        </Route>

        {/* Join Page route  */}
        <Route path="/join" element={<Join />} />
      </Routes>
    </>
  );
}

export default App;
