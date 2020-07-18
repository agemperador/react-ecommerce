import React from 'react'

import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) =>{

    const priceForStripe = price*100;
    const publishableKey ='pk_test_51H5OSyDjcyq1VXgtav5cnhTCd6pRJGVkhNK02nc3n1Vc4Et6iiZba9OXEEWWWPHiiZkwgqk9j7FNinCjyNlGAzDg00CtavyA8d'

    const onToken = token =>{
        console.log(token);
        alert('Payment Succesful')
    }

    return(
        <StripeCheckout
            label ='Pay Now'
            name  = 'TEMP WEB Ecommerse'
            billingAddress
            shippingAddress
            description = {`Your total is $${price}`}
            amount = {priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey = {publishableKey}
            />
    )
}

export default StripeCheckoutButton