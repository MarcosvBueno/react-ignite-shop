import { CartContext } from "@/contexts/CartContext";
import { useContext } from "react";


function useCart() {
  const {addToCart,existProducts,removeFromCart , cartItems, } = useContext(CartContext);


  return {addToCart,existProducts,removeFromCart , cartItems};
}

export default useCart;