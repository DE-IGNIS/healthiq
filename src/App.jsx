import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Faq from "./pages/Faq";
import Content from "./pages/Content";
import About from "./pages/About";
import Landing from "./pages/Landing";
import Join from "./pages/Join";
import {
  DietGen,
  Chat,
  HeatMap,
  Trivia,
  Feature5,
  // Feature6,
} from "./pages/home";
import Layout from "./layouts/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          {/* Landing Page route  */}
          <Route path="/" element={<Landing />} />

          {/* Home Page route  */}
          <Route path="/home" element={<Home />} />
          
          {/* FAQ Page route  */}
          <Route path="/faq" element={<Faq/>} />

          {/* Home - feature 1  Page route  */}
          <Route path="/home/chat" element={<Chat />} />

          {/* Home - feature 2 Page route  */}
          <Route path="/home/heatmap" element={<HeatMap />} />

          {/* Home - feature 3 Page route  */}
          <Route path="/home/trivia" element={<Trivia />} />

          {/* Home - feature 4 Page route  */}
          <Route path="/home/dietgen" element={<DietGen />} />

          {/* Home - feature 5 Page route  */}
          <Route path="/home/feature5" element={<Feature5 />} />

          {/* Home - feature 6 Page route  */}
          {/* <Route path="/home/feature6" element={<Feature6 />} /> */}

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
