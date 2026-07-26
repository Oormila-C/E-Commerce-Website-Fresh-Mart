import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Fail from "./components/Fail"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Fail" element={<Fail/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;