import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const stripePrice = price*100;
  const publicKey = "pk_test_51HHbIrKx1GFK0jKDF4ih2zqyJobVb2RpyYXmf53LAlayVqT00qxZfgLsMw26Mb5Vyi5eV2hB0zcEQ69Xp5GoNhav00VygjfmsD";

  const onToken = token => {
    console.log(token)
    alert('Payment Successful')
  }

  return (
    <StripeCheckout
      stripeKey= {publicKey}
      name="Street Collectiv"
      shippingAddress
      billingAddress={false}
      allowRememberMe={false}
      amount={stripePrice}
      token={onToken}
    >
      <button className="custom-button">Checkout</button>
    </StripeCheckout>
  );
};

export default StripeButton;
