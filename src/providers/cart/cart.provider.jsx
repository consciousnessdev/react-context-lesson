import React, { createContext, useState, useEffect } from 'react';

import {
  addItemToCart,
  removeItemFromCart,
  filterItemFromCart,
  getCartItemsCount,
  getCartTotal,
} from '../../redux/cart/cart.utils';

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
  const [cartItemPriceTotal, setCartItemPriceTotal] = useState(0)

  // declare local function as value of CartContext functions
  // this declaration same as do in redux
  const addItem = (item) => setCartItems(addItemToCart(cartItems, item));

  // adding removeItem function
  const removeItem = (item) =>
    setCartItems(removeItemFromCart(cartItems, item));

  // adding clearItemFromCart
  const clearItemFromCart = (item) =>
    setCartItems(filterItemFromCart(cartItems, item));

  // set useEffect for get latest item count
  useEffect(() => {
    // set cart item by get items count
    setCartItemsCount(getCartItemsCount(cartItems));
    setCartItemPriceTotal(getCartTotal(cartItems));
  }, [cartItems])
  

  return (
    <CartContext.Provider
      value={{
        hidden,
        toggleHidden,
        cartItems,
        cartItemsCount,
        addItem,
        removeItem,
        clearItemFromCart,
        cartItemPriceTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
