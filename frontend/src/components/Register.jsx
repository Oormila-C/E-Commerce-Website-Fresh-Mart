import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./LoginNavbar";
import Footer from "./Footer";
import bg from "../assets/background.jpg";

function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullname: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleRegister() {

    if (
      form.fullname.trim() === "" ||
      form.username.trim() === "" ||
      form.email.trim() === "" ||
      form.phone.trim() === "" ||
      form.password.trim() === "" ||
      form.confirmPassword.trim() === ""
    ) {
      alert("Please fill all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email)) {
      alert("Please enter a valid email.");
      return;
    }

    if (form.phone.length !== 10) {
      alert("Phone number must contain 10 digits.");
      return;
    }

    if (form.password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    alert("Registration Successful!");

    navigate("/login");
  }

  return (
    <>
      <Navbar />

      <div
        className="min-h-[calc(100vh-128px)] bg-cover bg-center flex items-center justify-center py-10"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="bg-white/90 shadow-2xl rounded-xl p-8 w-full max-w-md">

          <h1 className="text-3xl font-bold text-green-700 text-center">
            Create Account
          </h1>

          <p className="text-center text-gray-500 mt-2">
            Join FreshMart today!
          </p>

          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full border p-3 rounded mt-6"
          />

          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            className="w-full border p-3 rounded mt-4"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full border p-3 rounded mt-4"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            className="w-full border p-3 rounded mt-4"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full border p-3 rounded mt-4"
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
            className="w-full border p-3 rounded mt-4"
          />

          <button
            onClick={handleRegister}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded mt-6 transition"
          >
            Register
          </button>

          <p className="text-center mt-5 text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-green-700 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Register;