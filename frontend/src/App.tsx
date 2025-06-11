import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import RequestFeature from "./routes/RequestFeature";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/request-feature" element={<RequestFeature />} />
    </Routes>
  );
}

export default App;
