import React, { Component } from "react";
import PropTypes from "prop-types";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutButtonContent from "./checkout-button-content";

class CheckoutButton extends Component {
  render() {
    const {
      stripePublicKey,
      apiName,
      apiEndpoint,

      price,
      quantity,

      success_url,
      cancel_url,
    } = this.props;
    return (
      <StripeProvider apiKey={stripePublicKey}>
        <Elements>
          <CheckoutButtonContent
            apiName={apiName}
            apiEndpoint={apiEndpoint}
            price={price}
            quantity={quantity}
            success_url={success_url}
            cancel_url={cancel_url}
          />
        </Elements>
      </StripeProvider>
    );
  }
}

CheckoutButton.propTypes = {
  stripePublicKey: PropTypes.string.isRequired,
  apiName: PropTypes.string.isRequired,
  apiEndpoint: PropTypes.string.isRequired,

  price: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,

  success_url: PropTypes.string.isRequired,
  cancel_url: PropTypes.string.isRequired,
};

export default CheckoutButton;
