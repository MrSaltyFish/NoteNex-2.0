import { Routes, Route, Link } from "react-router-dom";
import RequestFeature from "./routes/RequestFeature";

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>NoteNex</h1>
      <nav>
        <Link to="/request-feature">Request a Feature</Link>
      </nav>

      <Routes>
        <Route path="/request-feature" element={<RequestFeature />} />
      </Routes>
    </div>
  );
}

export default App;
