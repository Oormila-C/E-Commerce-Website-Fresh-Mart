import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";


function Checkout() {
    
    const { cart, totalPrice, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  

  function placeOrder() {
    if (
      !name ||
      !email ||
      !phone ||
      !address
    ) {
      alert("Please fill all the details");
      return;
    }
    let orders = Number(localStorage.getItem("orders")) || 0;
  orders = orders + 1;
  localStorage.setItem("orders", orders);

   clearCart();
navigate("/success");
  }

  return (
    <div className="min-h-screen bg-green-50 py-10 px-5">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Customer Details */}

        <div className="bg-white shadow-lg rounded-xl p-8">

          <h1 className="text-3xl font-bold text-green-700 mb-6">
            Checkout
          </h1>

          <input
            type="text"
            placeholder="Full Name"
            onChange={(e)=>setName(e.target.value)}
            className="w-full border p-3 rounded mb-4"
          />

          <input
            type="email"
            placeholder="Email"
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full border p-3 rounded mb-4"
          />

          <input
            type="text"
            placeholder="Phone Number"
            onChange={(e)=>setPhone(e.target.value)}
            className="w-full border p-3 rounded mb-4"
          />

          <textarea
            placeholder="Delivery Address"
            onChange={(e)=>setAddress(e.target.value)}
            className="w-full border p-3 rounded mb-4"
          ></textarea>

          <div className="mt-4">
  <label className="block text-lg font-semibold mb-2">
    Payment Method
  </label>

  <div className="flex items-center border rounded-lg p-4 bg-green-50">
    <input
      type="radio"
      checked
      readOnly
      className="mr-3 accent-green-600"
    />

    <span className="text-lg font-medium">
      💵 Cash on Delivery (COD)
    </span>
  </div>
</div>

        </div>

        {/* Order Summary */}

        <div className="bg-white shadow-lg rounded-xl p-8">

          <h2 className="text-3xl font-bold mb-6">
            Order Summary
          </h2>

          {cart.map(item=>(
            <div
              key={item.id}
              className="flex justify-between py-2 border-b"
            >
              <span>
                {item.name} × {item.quantity}
              </span>

              <span>
                ₹{item.price * item.quantity}
              </span>
            </div>
          ))}

          <h2 className="text-3xl font-bold mt-8 text-green-700">
            Total : ₹{totalPrice}
          </h2>

          <button
            onClick={placeOrder}
            className="mt-8 w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg text-xl"
          >
            Place Order
          </button>
             <div>
      <button
        onClick={() => navigate(-1)}
        className="bg-gray-300 hover:bg-gray-400 px-5 py-2 rounded-lg mt-5"
      >
        ← Back
      </button>

      {/* Rest of your Product Details */}
    </div>
        </div>

      </div>
          
    </div>
  );
}

export default Checkout;