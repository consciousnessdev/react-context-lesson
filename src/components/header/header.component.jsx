import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

// import context CurrentUserContext
import CurrentUserContext from '../../contexts/current-user/current-user.context';
import CartContext from '../../contexts/cart/cart.context';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = () => {
  // declare currentUser value with useContext of CurrentUserContext value's
  const currentUser = useContext(CurrentUserContext);

  // this declared because need of create own toggle hidden
  const [hidden, setHidden] = useState(true);
  // then hidden state passing in to CartContext with consume of application
  const toggleHidden = () => setHidden(!hidden);

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {/* Conditional rendering by currentUser value's */}
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        {/*
          // override CartContext value's with 
          // local state hidden & local function toggleHidden
        */}
        <CartContext.Provider
          value={{
            hidden,
            toggleHidden,
          }}
        >
          <CartIcon />
        </CartContext.Provider>
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

export default Header;
