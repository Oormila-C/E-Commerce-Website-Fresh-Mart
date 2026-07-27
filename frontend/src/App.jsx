import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Fail from "./components/Fail";
import Cart from "./components/Cart";
import { ToastContainer } from "react-toastify";
import Checkout from "./components/Checkout";
import Success from "./components/Success";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./components/Register";

function App() {
  return (
  <BrowserRouter>

    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/fail" element={<Fail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/success" element={<Success />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/home" element={
    <ProtectedRoute>
      <Home />
    </ProtectedRoute>
      }/>
    </Routes>

    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
    />
    
  
</BrowserRouter>
);
}

export default App;

