
import { createContext, useState } from "react";


export interface Iproducts {
  id: string;
  name: string;
  price: number;
  image: string;
  defaultPriceId: string;
  numberPrice: number;
  description: string;
}


interface CartContextData {
  cartItems: Iproducts[];
  addToCart: (product: Iproducts) => void;
  removeFromCart: (productId: string) => void;
  existProducts: (productId: string) => boolean;
  priceTotal: number;
 
}


interface CartContextProviderProps {
  children: React.ReactNode;
}

export const CartContext = createContext ({} as CartContextData);


export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  
  const [cartItems , setCartItems] = useState<Iproducts[]>([]);

  const priceTotal = cartItems.reduce((total, product) => {
    return total + product.numberPrice; // Use numberPrice instead of price
  }, 0);
  

  const addToCart = (product: Iproducts) => {
    setCartItems((state) => [...state, product]);
  };

  const removeFromCart = (productId: string) => {
    setCartItems((state) => state.filter((item) => item.id !== productId));
  };

  const existProducts = (productId: string) => {
    return cartItems.some((product) => product.id === productId);
  }


  return (
    <CartContext.Provider value={{ cartItems, addToCart, existProducts, removeFromCart,priceTotal }}>
      {children}
    </CartContext.Provider>
  );


}
