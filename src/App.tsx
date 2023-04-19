import {
  Navbar,
  Events,
  Hackathons,
  Home,
  Labs,
  Research,
} from "./components/script";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hackathons" element={<Hackathons />} />
        <Route path="/events" element={<Events />} />
        <Route path="/research" element={<Research />} />
        <Route path="/labs" element={<Labs />} />
      </Routes>
    </div>
  );
}

export default App;
