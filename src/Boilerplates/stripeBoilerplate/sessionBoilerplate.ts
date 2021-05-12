const sessionString = `import Stripe from 'stripe';

// creating new instance of Stripe with your secret key under .env file
const stripe = new Stripe(\`\${process.env.STRIPE_SECRET_KEY}\`, {
  apiVersion: '2020-03-02',
});

export default async (req, res) => {
  // storing quantity info from your request body
  const { quantity } = req.body;
  // creating session through your stripe/checkout
  const session = await stripe.checkout.sessions.create({
    // declaring desired payment methods
    payment_method_types: ['card'],
    // defining line items
    line_items: [
      {
        price: \`\${process.env.PRICE_ID}\`,
        quantity,
      },
    ],
    // setting up payment option/ choose among payments(one time purchases), subscription or setup 
    mode: 'subscription',
    // supplying the redirect URLs
    success_url: \`\${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}\`,
    cancel_url: \`\${req.headers.origin}/checkout\`,
  });
  // seding response back to client with session id 
  res.status(200).json({ sessionId: session.id });
};
`;

export = sessionString;
