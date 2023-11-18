import { CartContext } from "@/contexts/CartContext";
import { useContext } from "react";


function useCart() {
  const {addToCart,existProducts,removeFromCart , cartItems,priceTotal } = useContext(CartContext);

  return {addToCart,existProducts,removeFromCart,cartItems,priceTotal};
}

export default useCart;