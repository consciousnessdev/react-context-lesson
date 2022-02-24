// import useContext
import React, { useContext } from 'react';

// commented caused by use cart provider pattern
// import CartContext
// import CartContext from '../../contexts/cart/cart.context';

// change use CartContext wihtin cart provider file
import { CartContext } from '../../providers/cart/cart.provider';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = () => {
  // declare toggleHidden function 
  // and cartItemsCount value based on CartContext value
  const { toggleHidden, cartItemsCount } = useContext(CartContext);
  return (
    <div className="cart-icon" onClick={toggleHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItemsCount}</span>
    </div>
  );
};

export default CartIcon;
