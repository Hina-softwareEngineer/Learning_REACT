import React from 'react';

import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
const StripeCheckoutButton =({price})=>{
    const priceForStripe= price*100;
    const publishableKey='pk_test_1Wm07C2Hm9zmpv9vLDm6nVpo00cbEBooGF';
  
  const  onToken= token =>{
      axios({
          url : 'payment',
          method : 'post',
          data : {
              amount : priceForStripe,
              token,
          }
      }).then(response=>{
          alert('Payment Successful')
      }).catch(error=>{
          console.log('Payment error', JSON.parse(error));
          alert('There was an issue with your payment. Please sure you use the provided credit card.');
      });

    }


    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your Total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;