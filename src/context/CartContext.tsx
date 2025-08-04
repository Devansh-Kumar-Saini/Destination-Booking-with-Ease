import React, { createContext, useContext, useState } from "react";

const CartContext = createContext<any>(null);

export const useCart = () => useContext(CartContext);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<any[]>([]);

  const addToCart = (product: any) => setCart((prev) => [...prev, product]);
  const removeFromCart = (id: number) => setCart((prev) => prev.filter((item) => item.id !== id));

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};