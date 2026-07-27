import { Link } from "react-router-dom";

function Success() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-green-50">

      <div className="bg-white p-12 rounded-xl shadow-xl text-center">

        <div className="text-7xl">
          ✅
        </div>

        <h1 className="text-4xl font-bold text-green-700 mt-5">
          Order Placed Successfully!
        </h1>

        <p className="mt-4 text-gray-500">
          Thank you for shopping with FreshMart.
        </p>

        <Link
          to="/home"
          className="inline-block mt-8 bg-green-600 text-white px-8 py-3 rounded-lg"
        >
          Continue Shopping
        </Link>

      </div>
    
    </div>
    
  );
}

export default Success;