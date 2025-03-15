import { Routes, Route } from "react-router-dom";
import Inventory from "./pages/Inventory";
import Home from "./pages/Home";
import Reviews from "./pages/Review";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
}

export default App;
