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
       <CheckoutButton 
         stripePublicKey="pk_test_51HHbIrKx1GFK0jKDF4ih2zqyJobVb2RpyYXmf53LAlayVqT00qxZfgLsMw26Mb5Vyi5eV2hB0zcEQ69Xp5GoNhav00VygjfmsD"
         apiName="stripeapi"
         apiEndpoint="/checkout"
         name='T-shirt'
         description='Comfortable cotton t-shirt'
         images={['http://lorempixel.com/400/200/']}
         amount={550}
         currency='usd'
         quantity={1}
         success_url='https://localhost:3000/success'
         cancel_url='https://localhost:3000/checkout' 
       />
      </div>
  </div>

);



const mapDispatchToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapDispatchToProps)(CheckoutPage);
