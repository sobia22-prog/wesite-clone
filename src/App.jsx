import { Routes, Route } from "react-router-dom";
import Inventory from "./pages/Inventory";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </div>
  );
}

export default App;
