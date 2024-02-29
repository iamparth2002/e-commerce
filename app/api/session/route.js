const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export const POST = async (request) =>  {

    const order = await request.json()
    // return new Response(JSON.stringify(request.headers.origin), { status: 200 })

const {products,email} = order
const session = await stripe.checkout.sessions.create({
    line_items:products,
    mode: 'payment',
    customer_email:email,
    success_url: `http://localhost:3000/success`,
    cancel_url: `http://localhost:3000/cancel`,
    metadata: {orderId:order._id},
  });
  request.redirect(303, session.url);

}