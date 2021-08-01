/* eslint-disable radar/prefer-immediate-return */
import { loadStripe } from '@stripe/stripe-js'

export const getStripeJs = async () => {
  const stripeJs = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY)
  return stripeJs
}
