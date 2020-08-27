import React, { Component } from 'react';
import { Button, CircularProgress, Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import { API } from 'aws-amplify';
import { injectStripe } from 'react-stripe-elements';
import CustomButton from '../../components/custom-button/custom-button.component'

class CheckoutButtonContent extends Component {
    state = {
        loading: false,
    }
    constructor() {
        super();
        this.handlePay = this.handlePay.bind(this)
    }

    async handlePay() {
        this.setState({ loading: true })
        const body = {
            name: this.props.name,
            description: this.props.description,
            images: this.props.images,
            amount: this.props.amount,
            currency: this.props.currency,
            quantity: this.props.quantity,
            success_url: this.props.success_url,
            cancel_url: this.props.cancel_url,
        }
        const response = await API.post(this.props.apiName, this.props.apiEndpoint, { body })
        this.props.stripe.redirectToCheckout({
            // Make the id field from the Checkout Session creation API response
            // available to this file, so you can provide it as parameter here
            // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
            sessionId: response.session.id
        }).then(function (result) {
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer
            // using `result.error.message`.
        });
        this.setState({ loading: false })
    }

    render() {
        const { loading } = this.state;
        const { amount, currency } = this.props;
        return (
            <Box display="flex" flexDirection="row-reverse" flexWrap="wrap" alignItems="center">
                <CustomButton onClick={this.handlePay}> Checkout </CustomButton>
                <Box marginRight={2} />
                {
                    loading ?
                        <CircularProgress color="primary" />
                        :
                        null
                }
            </Box>
        );
    }
}

CheckoutButtonContent.propTypes = {
    apiName: PropTypes.string.isRequired,
    apiEndpoint: PropTypes.string.isRequired,

    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,

    success_url: PropTypes.string.isRequired,
    cancel_url: PropTypes.string.isRequired,
};

export default injectStripe(CheckoutButtonContent);