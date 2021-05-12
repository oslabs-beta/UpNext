"use strict";
const checkoutString = `
//loadStripe is a function that returns a promise with a newly created Stripe Object.
import { loadStripe } from '@stripe/stripe-js';

//We initialize an instance of the Stripe object passing in the Stripe Public API key from the env file
//to identify the user's website to Stripe and assign it the variable stripePromise.
const stripePromise = loadStripe(
  \`\${process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY}\`
);

//This is a react component which renders some text and a button and also has a method to handle the funtionality of the button.
export default function Checkout() {
  //The function handleClick will fetch the session from an API endpoint, by sending a Post request and receving a session from the response.   
  const handleClick = async (event) => {
    const { sessionId } = await fetch('/api/checkout/session', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ quantity: 1 }),
    }).then((res) => res.json());

    //Resolves the promise for the instance of the stripe Object providing the entry point for stripe development tools
    const stripe = await stripePromise;

    //Resolves the promise for the method redirectingtoCheckout for the stripe object, a Stripe-hosted page to 
    //securely collect payment information, using the provided session ID.
    //We also destructure the error key from the redirecToCheckout object for future debugging purposes.
    const { error } = await stripe.redirectToCheckout({
      sessionId,
    });
  };

  return (
    <div>
      <h1>Checkout</h1>
      <button role="link" onClick={handleClick}>
        Checkout
      </button>
    </div>
  );
}
`;
module.exports = checkoutString;
//# sourceMappingURL=checkoutBoilerplate.js.map