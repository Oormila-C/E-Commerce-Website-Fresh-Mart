import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart } = useContext(CartContext);

  return (
    <nav className="bg-green-700 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <h1 className="text-3xl font-bold">
          FreshMart
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-lg">

          <li>
            <Link to="/home" className="hover:text-yellow-300">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-yellow-300">
              About
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-yellow-300">
              Contact
            </Link>
          </li>
          <li>
  <Link to="/dashboard">Dashboard</Link>
</li>
          <li>
  <Link to="/logout" className="hover:text-yellow-300">
    Logout
  </Link>
</li>

          <li>
            <Link
              to="/cart"
              className="bg-white text-green-700 px-4 py-2 rounded-lg font-semibold hover:bg-green-100"
            >
              🛒 Cart ({cart.length})
            </Link>
          </li>

        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-green-600">
          <ul className="flex flex-col items-center gap-5 py-6">

            <li>
              <Link
                to="/home"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>

            <li>
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
            </li>

            <li>
              <Link
                to="/cart"
                onClick={() => setMenuOpen(false)}
                className="bg-white text-green-700 px-4 py-2 rounded-lg font-semibold"
              >
                🛒 Cart ({cart.length})
              </Link>
            </li>

          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;