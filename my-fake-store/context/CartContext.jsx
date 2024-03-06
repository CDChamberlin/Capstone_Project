"use client";

import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [productList, setProductList] = useState([]);

  const updateProducts = (products) => setProductList(products);
  const addToCart = (itemName) => {
    console.log("Item added.");
    const selectedItem = productList.find((item) => item.title === itemName);
    if (selectedItem) {
      setCart((prevCart) => [...prevCart, selectedItem]);
      console.log(cart);
    }
  };
  const removeFromCart = (itemName) =>{
    let newCart = cart.slice(cart.findIndex((item) => item.title === itemName), 1)
    setCart(newCart)
  }

  const isInCart = (itemName) => {return cart.some((item) => item.title === itemName)}

  // const getCart() => return(cart)
  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateProducts, productList, removeFromCart, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
export function useCart() {
  return useContext(CartContext);
}
