import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/Order";
const stripe = require('stripe')(process.env.STRIPE_SK);
import {buffer} from 'micro';

const endpointSecret = "whsec_7ee45b9b71e485993cdf44e08fa759c7c678683064a5d51ab12fa2f78c6a1b69";

export default async function handler(req,res) {
    await mongooseConnect();
    const sig = req.headers['stripe-signature'];
    let event;

    try {
      event = stripe.webhooks.constructEvent(await buffer(req), sig, endpointSecret);
    } catch (err) {
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }
  
    switch (event.type) {
        //case 'payment_intent.succeeded':
        case 'checkout.session.completed':
            const data = event.data.object;
            const orderId = data.metadata.orderId;
            const paid = data.payment_status === 'paid';
            if(orderId && paid){
                await Order.findByIdAndUpdate(orderId, {
                    paid: true,
                })
            }
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    res.status(200).send('ok');
}


export const config = {
    api: {bodyParser:false}
}