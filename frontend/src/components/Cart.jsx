import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Cart() {
    const navigate = useNavigate();
    const {
        cart,
        increaseQuantity,
        decreaseQuantity,
        removeProduct,
        totalPrice,
    } = useContext(CartContext);

    return (
        <div className="min-h-screen bg-green-50 py-10 px-5">
            <div className="max-w-5xl mx-auto">

                <h1 className="text-4xl font-bold text-green-700 mb-8 text-center">
                    🛒 Shopping Cart
                </h1>

                {cart.length === 0 ? (
                    <div className="bg-white shadow-lg rounded-xl p-10 text-center">
                        <h2 className="text-2xl font-semibold text-gray-600">
                            Your Cart is Empty
                        </h2>

                        <p className="text-gray-500 mt-3">
                            Looks like you haven't added anything yet.
                        </p>

                        <Link
                            to="/home"
                            className="inline-block mt-6 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                ) : (
                    <>
                        {cart.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-xl shadow-md p-5 mb-5 flex flex-col md:flex-row items-center justify-between"
                            >
                                <div className="flex items-center gap-5">

                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-28 h-28 object-cover rounded-lg"
                                    />

                                    <div>
                                        <h2 className="text-2xl font-bold">
                                            {item.name}
                                        </h2>

                                        <p className="text-gray-500">
                                            {item.category}
                                        </p>

                                        <p className="text-green-700 font-bold mt-2">
                                            ₹{item.price}
                                        </p>
                                    </div>

                                </div>

                                <div className="flex flex-col items-center gap-3 mt-5 md:mt-0">

                                    <div className="flex items-center gap-3">

                                        <button
                                            onClick={() => decreaseQuantity(item.id)}
                                            className="bg-red-500 text-white px-3 py-1 rounded"
                                        >
                                            −
                                        </button>

                                        <span className="text-xl font-bold">
                                            {item.quantity}
                                        </span>

                                        <button
                                            onClick={() => increaseQuantity(item.id)}
                                            className="bg-green-600 text-white px-3 py-1 rounded"
                                        >
                                            +
                                        </button>

                                    </div>

                                    <button
                                        onClick={() => removeProduct(item.id)}
                                        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                                    >
                                        Remove
                                    </button>

                                </div>
                            </div>
                        ))}

                        <div className="bg-white shadow-lg rounded-xl p-6 mt-8">

                            <h2 className="text-3xl font-bold text-green-700">
                                Total : ₹{totalPrice}
                            </h2>

                            <Link
                                to="/checkout"
                                className="block text-center mt-6 w-full bg-green-600 text-white py-4 rounded-lg text-xl hover:bg-green-700"
                            >
                                Proceed to Checkout
                            </Link>
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
                    </>
                )}

            </div>
       
        </div>
    );
}

export default Cart;