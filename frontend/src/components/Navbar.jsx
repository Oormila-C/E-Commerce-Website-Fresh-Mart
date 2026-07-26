import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-green-600 shadow-md">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        <h1 className="text-3xl font-bold text-white">
          FreshMart
        </h1>

        <ul className="flex gap-8 text-white font-medium">
          <li><Link to="/">Home</Link></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><Link to="/">Login</Link></li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;