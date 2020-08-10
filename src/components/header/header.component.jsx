import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import './header.styles.scss';

const Header = ({ hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <h1 className='logo'> Street Collectiv </h1>
    </Link>
    <div className='options'>
      <Link className='option' to='/'>
        HOME
      </Link>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/'>
        ABOUT
      </Link>

      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
