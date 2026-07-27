import { useContext } from "react";
import { CartContext } from "../context/CartContext";


function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 hover:shadow-2xl transition duration-300">

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-52 object-cover rounded-lg"
      />

      <h2 className="text-xl font-bold mt-4">
        {product.name}
      </h2>

      <p className="text-gray-500">
        {product.category}
      </p>

      <p className="text-2xl font-bold text-green-700 mt-2">
        ₹{product.price}
      </p>

      <button
        onClick={() => addToCart(product)}
        className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
      >
        🛒 Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;