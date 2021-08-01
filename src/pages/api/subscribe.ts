import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'

import { query as q } from 'faunadb'

import { fauna } from '~/services/fauna'
import { stripe } from '~/services/stripe'

type User = {
  ref: { id: string }
  data: {
    stripe_costumer_id: string
  }
}

// eslint-disable-next-line consistent-return
export default async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === 'POST') {
    // const { user } = await getSession({ req: request })
    const session = await getSession({ req: request })

    if (!session) {
      return
    }

    const userFromDB = await fauna.query<User>(
      q.Get(q.Match(q.Index('user_by_email'), q.Casefold(session.user!.email!))),
    )

    let customerId = userFromDB.data.stripe_costumer_id

    if (!customerId) {
      const stripeCustomer = await stripe.customers.create({
        email: session.user!.email!,
      })

      await fauna.query(
        q.Update(q.Ref(q.Collection('users'), userFromDB.ref.id), {
          data: {
            stripe_costumer_id: stripeCustomer.id,
          },
        }),
      )
      customerId = stripeCustomer.id
    }

    const stripeCheckoutSession = await stripe.checkout.sessions.create({
      customer: customerId,
      payment_method_types: ['card'],
      billing_address_collection: 'required',
      line_items: [{ price: 'price_1IXyLHEdGIOVJoG3Uec0ms5D', quantity: 1 }],
      mode: 'subscription',
      allow_promotion_codes: true,
      success_url: process.env.STRIPE_SUCCESS_URL,
      cancel_url: process.env.STRIPE_CANCEL_URL,
    })

    return response.status(200).json({ sessionId: stripeCheckoutSession.id })
  }
  response.setHeader('Allow', 'POST')
  response.status(405).end('Method not allowed')
}
