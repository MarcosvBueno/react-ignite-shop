import { Iproducts } from '@/contexts/CartContext';
import { stripe } from '@/lib/stripe';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { products } = req.body as { products: Iproducts[] };

  if (req.method !== 'POST') {
    return res.status(405).end('Method not allowed');
  }

  if (!products) {
    return res.status(400).json({ error: 'Product not found' });
  }

  const successURL = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelURL = `${process.env.NEXT_URL}/`;

  const createCheckoutSession = await stripe.checkout.sessions.create({
    success_url: successURL,
    cancel_url: cancelURL,
    mode: 'payment',

    line_items: products.map(product => ({
      price: product.defaultPriceId,
      quantity: 1,
    })),
    


  });

  return res.status(201).json({ checkoutUrl: createCheckoutSession.url });
}
