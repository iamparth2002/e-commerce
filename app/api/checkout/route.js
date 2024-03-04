import { initMongoose } from "@/lib/mongoose";
import ProductModel from "@/Models/Product";
import Order from "@/Models/Order";
import { NextResponse } from "next/server";

import { redirect } from "next/navigation";
const stripe = require('stripe')("sk_test_51OqFROSI5F6AGk8FVpi9Asci6Ohc5F9ysmHZiG9tYPSDfyRkd9NdicvJdUJzwpi77Hf98qxQqduDHbyuqr0spt1N00kSIA047g");

export const POST = async (request,response) =>  {
  await initMongoose();


  if (request.method !== 'POST') {
    res.json('should a post but its not!');
    return;
  }
//   const data = await request.json()
//   console.log(request.body)
  const {email,name,address,city,selectedProducts} =await request.json();
//   const body =await request.json()
//   const productsIds = request.body.products.split(',');
  const productsIds = selectedProducts;
  const uniqIds = [...new Set(productsIds)];
  const products = await ProductModel.find({_id:{$in:uniqIds}}).exec();


  let line_items = [];
  for (let productId of uniqIds) {
    const quantity = productsIds.filter(id => id === productId).length;
    const product = products.find(p => p._id.toString() === productId);
    line_items.push({
      quantity,
      price_data: {
        currency: 'USD',
        product_data: {name:product.name},
        unit_amount: product.price * 100,
      },
    });
  }

  const order = await Order.create({
    products:line_items,
    name,
    email,
    address,
    city,
    paid:0,
  });
// return new Response(JSON.stringify(order), { status: 200 })


  const session = await stripe.checkout.sessions.create({
    line_items: line_items,
    mode: 'payment',
    payment_method_types: ['card'],
    customer_email: email,
    success_url: `https://e-commerce-gamma-fawn.vercel.app/success`,
    cancel_url: `https://e-commerce-gamma-fawn.vercel.app/cancel`,
    metadata: {orderId:order._id.toString()},
  });
return new Response(JSON.stringify(session.url), { status: 200 })
   
//    redirect(session.url);
   

}
