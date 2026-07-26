import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const Navigate=useNavigate()
  function logout(){
    Navigate("/Login")
  }
  return (
    
    <>
      <Navbar />

      <main className="min-h-screen bg-green-50 flex items-center justify-center">
        <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-2xl text-center">

          <h1 className="text-4xl font-bold text-green-600">
            Welcome to FreshMart
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Login Successful!
          </p>

          <p className="mt-2 text-gray-500">
            You have successfully logged into your account.
          </p>

          <div className="grid grid-cols-3 gap-6 mt-8">
            <div className="bg-green-100 p-4 rounded-lg">
              <h2 className="text-2xl font-bold">0</h2>
              <p>Orders</p>
            </div>

            <div className="bg-green-100 p-4 rounded-lg">
              <h2 className="text-2xl font-bold">120</h2>
              <p>Products</p>
            </div>

            <div className="bg-green-100 p-4 rounded-lg">
              <h2 className="text-2xl font-bold">Active</h2>
              <p>Delivery</p>
            </div>
          </div>

          <button onClick={logout} className="mt-8 bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600">
            Logout
          </button>

        </div>
      </main>

      <Footer />
    </>
  );
}

export default Dashboard;