import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  

  // Add Product to Cart
  function addToCart(product) {
    const existingProduct = cart.find((item) => item.id === product.id);
    
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    toast.success("Product added to cart!");
  }

  // Increase Quantity
  function increaseQuantity(id) {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  // Decrease Quantity
  function decreaseQuantity(id) {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  // Remove Product
  function removeProduct(id) {
    setCart(cart.filter((item) => item.id !== id));
    toast.success("Product removed!");
  }

  // Total Price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  function clearCart() {
  setCart([]);
}

  return (
    <CartContext.Provider
      value={{
  cart,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProduct,
  totalPrice,
  clearCart,
}}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;