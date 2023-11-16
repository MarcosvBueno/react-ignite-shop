
import { createContext, useState } from "react";


export interface Iproducts {
  id: number;
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
  removeFromCart: (productId: number) => void;
  existProducts: (productId: number) => boolean;
 
}


interface CartContextProviderProps {
  children: React.ReactNode;
}

export const CartContext = createContext ({} as CartContextData);


export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  
  const [cartItems , setCartItems] = useState<Iproducts[]>([]);

  const addToCart = (product: Iproducts) => {
    setCartItems((state) => [...state, product]);
  };

  const removeFromCart = (productId: number) => {
    setCartItems((state) => state.filter((item) => item.id !== productId));
  };

  const existProducts = (productId: number) => {
    return cartItems.some((product) => product.id === productId);
  }


  return (
    <CartContext.Provider value={{ cartItems, addToCart, existProducts, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );


}
