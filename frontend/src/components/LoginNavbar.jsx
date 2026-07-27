import { useState } from "react";
import { Link } from "react-router-dom";

function LoginNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-green-700 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <Link to="/login">
          <h1 className="text-3xl font-bold">
            FreshMart
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">

          <Link
            to="/login"
            className="hover:text-green-200 font-medium"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="bg-white text-green-700 px-5 py-2 rounded-lg font-semibold hover:bg-green-100 transition"
          >
            Sign Up
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-green-600">
          <div className="flex flex-col items-center gap-4 py-4">

            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>

            <Link
              to="/signup"
              onClick={() => setMenuOpen(false)}
              className="bg-white text-green-700 px-5 py-2 rounded-lg font-semibold"
            >
              Sign Up
            </Link>
            <Link to="/signup">
  Sign Up
</Link>

          </div>
        </div>
      )}
    </nav>
  );
}

export default LoginNavbar;