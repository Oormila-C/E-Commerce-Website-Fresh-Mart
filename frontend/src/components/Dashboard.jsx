import Navbar from "./Navbar";
import Footer from "./Footer";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  // User Details
  const username = localStorage.getItem("username") || "Customer";
  const email = localStorage.getItem("email") || "customer@gmail.com";
  const phone = localStorage.getItem("phone") || "9876543210";

  // Orders
  const orders = Number(localStorage.getItem("orders")) || 0;

  // Total Cart Value
  const totalAmount = cart.reduce((total, item) => {
    return total + item.price * (item.quantity || 1);
  }, 0);

  function logout() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("phone");

    navigate("/login");
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-green-50 py-10 px-6">

        <div className="max-w-7xl mx-auto">

          {/* Welcome Card */}

          <div className="bg-gradient-to-r from-green-600 to-green-500 text-white rounded-2xl shadow-lg p-8">

            <h1 className="text-4xl font-bold">
              Welcome, {username} 👋
            </h1>

            <p className="mt-3 text-lg">
              Manage your shopping activity from your dashboard.
            </p>

          </div>

          {/* Statistics */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

            {/* Cart */}

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">

              <div className="text-5xl">🛒</div>

              <h2 className="text-3xl font-bold mt-3">
                {cart.length}
              </h2>

              <p className="text-gray-500">
                Cart Items
              </p>

            </div>

            {/* Orders */}

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">

              <div className="text-5xl">📦</div>

              <h2 className="text-3xl font-bold mt-3">
                {orders}
              </h2>

              <p className="text-gray-500">
                Orders
              </p>

            </div>

            {/* Total Value */}

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">

              <div className="text-5xl">💰</div>

              <h2 className="text-3xl font-bold mt-3 text-green-700">
                ₹{totalAmount}
              </h2>

              <p className="text-gray-500">
                Total Cart Value
              </p>

            </div>

          </div>

          {/* User Profile */}

          <div className="bg-white rounded-xl shadow-lg p-8 mt-10">

            <h2 className="text-3xl font-bold text-green-700 mb-5">
              User Profile
            </h2>

            <div className="space-y-3 text-lg">

              <p>
                <strong>Username :</strong> {username}
              </p>

              <p>
                <strong>Email :</strong> {email}
              </p>

              <p>
                <strong>Phone :</strong> {phone}
              </p>

              <p>
                <strong>Location :</strong> Madurai
              </p>

            </div>

          </div>

          {/* Recent Orders */}

          <div className="bg-white rounded-xl shadow-lg p-8 mt-10">

            <h2 className="text-3xl font-bold text-green-700 mb-5">
              Recent Orders
            </h2>

            {orders === 0 ? (
              <p className="text-gray-500">
                No recent orders available.
              </p>
            ) : (
              <div className="bg-green-100 p-4 rounded-lg">

                <p className="text-lg font-semibold text-green-700">
                  ✅ You have successfully placed {orders} order(s).
                </p>

              </div>
            )}

          </div>

          {/* Offer Banner */}

          <div className="bg-gradient-to-r from-green-600 to-green-500 text-white rounded-xl shadow-lg p-8 mt-10">

            <h2 className="text-3xl font-bold">
              🎉 Today's Offer
            </h2>

            <p className="mt-3 text-lg">
              Get <strong>20% OFF</strong> on Fruits & Vegetables.
            </p>

          </div>

          {/* Quick Actions */}

          <div className="mt-10">

            <h2 className="text-3xl font-bold text-green-700 mb-6">
              Quick Actions
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

              <button
                onClick={() => navigate("/home")}
                className="bg-green-600 hover:bg-green-700 text-white rounded-xl p-5 font-semibold transition"
              >
                🏠 Home
              </button>

              <button
                onClick={() => navigate("/cart")}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl p-5 font-semibold transition"
              >
                🛒 View Cart
              </button>

              <button
                onClick={() => navigate("/contact")}
                className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-xl p-5 font-semibold transition"
              >
                📞 Contact
              </button>

              <button
                onClick={logout}
                className="bg-red-600 hover:bg-red-700 text-white rounded-xl p-5 font-semibold transition"
              >
                🚪 Logout
              </button>

            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Dashboard;