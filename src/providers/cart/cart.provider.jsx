import React, { createContext, useState, useEffect } from 'react';

import { addItemToCart, removeItemFromCart } from '../../redux/cart/cart.utils';

// new CartContext use within cart provider pattern
export const CartContext = createContext({
  hidden: true,
  toggleHidden: () => {},
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  clearItemFromCart: () => {},
  cartItemsCount: 0,
});

// create component as provider, within passed componet children
const CartProvider = ({ children }) => {
  // moved from Header component
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(!hidden);

  // declare local state as value of both in cart CartContext
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  // declare local function as value of CartContext functions
  // this declaration same as do in redux
  const addItem = (item) => setCartItems(addItemToCart(cartItems, item));

  return (
    <CartContext.Provider
      value={{
        hidden,
        toggleHidden,
        cartItems,
        cartItemsCount,
        addItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
