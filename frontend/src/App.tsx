import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import RequestFeature from "./routes/RequestFeature";
import AcademicCalendar from "./routes/AcademicCalendar.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/calendar" element={<AcademicCalendar />} />
      <Route path="/request-feature" element={<RequestFeature />} />
    </Routes>
  );
}

export default App;
