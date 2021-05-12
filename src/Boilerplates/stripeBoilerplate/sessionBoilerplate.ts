const sessionString = `import Stripe from 'stripe';

co;nst stripe = new Stripe(\`\${process.env.STRIPE_SECRET_KEY}\`, {
  apiVersion: '2020-03-02',
});

export default async (req, res) => {
  const { quantity } = req.body;
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price: \`price_1IpcWpFPhNUZ0D2uom22dn4v\`,
        quantity,
      },
    ],
    mode: 'subscription',
    success_url: \`\${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}\`,
    cancel_url: \`\${req.headers.origin}/checkout\`,
  });
  res.status(200).json({ sessionId: session.id });
};
`;

export = sessionString;
