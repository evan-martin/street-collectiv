import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import CheckoutButton from '../../components/checkout-button/checkout-button'

import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';





import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total, price }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className='total'>TOTAL: ${total}</div>
      <div className='checkout-button'>     
       <CheckoutButton />
      </div>
  </div>

);



const mapDispatchToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapDispatchToProps)(CheckoutPage);
