import { stripe } from '@/lib/stripe';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { priceId } = req.body;

  if (req.method !== 'POST') {
    return res.status(405).end('Method not allowed');
  }

  if (!priceId) {
    return res.status(400).json({ error: 'Price ID is required' });
  }

  const successURL = `${process.env.NEXT_URL}/success`;
  const cancelURL = `${process.env.NEXT_URL}/`;

  const createCheckoutSession = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: priceId,
        quantity: 1
      }
    ],

    success_url: successURL,
    cancel_url: cancelURL,
    mode: 'payment'
  });

  return res.status(201).json({ checkoutUrl: createCheckoutSession.url });
}
