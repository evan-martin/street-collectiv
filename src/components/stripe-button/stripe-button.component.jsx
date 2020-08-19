import React from "react";
import StripeCheckout from "react-stripe-checkout";

export default class StripeButton extends React.Component {
  onToken = (token) => {};

  render() {
    return (
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_51HHbIrKx1GFK0jKDF4ih2zqyJobVb2RpyYXmf53LAlayVqT00qxZfgLsMw26Mb5Vyi5eV2hB0zcEQ69Xp5GoNhav00VygjfmsD"
        name="Street Collectiv"
        shippingAddress
        billingAddress={false}
        allowRememberMe={false}
      >
        <button className="custom-button">Checkout</button>
      </StripeCheckout>
    );
  }
}
