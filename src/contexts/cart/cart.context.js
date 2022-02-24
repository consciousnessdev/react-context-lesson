import { createContext } from 'react';

// declare CartContext value
const CartContext = createContext({
  hidden: true,
  // set function toggle hidden to empty anonymous function
  toggleHidden: () => {},
});

export default CartContext;