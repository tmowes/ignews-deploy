import { signIn, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'

import { api } from '~/services/api'
import { getStripeJs } from '~/services/stripe-js'

import * as S from './styles'

export const SubscribeButton = () => {
  const [session] = useSession()
  const { push } = useRouter()

  const handleSubscribe = async () => {
    if (!session) {
      await signIn('github')
      return
    }

    if (session?.activeSubscription) {
      push('/posts')
      return
    }
    try {
      const { data } = await api.post('/subscribe')
      const { sessionId } = data

      const stripe = await getStripeJs()

      await stripe?.redirectToCheckout({ sessionId })
    } catch (err) {
      // eslint-disable-next-line no-alert
      alert(err.message)
    }
  }

  return (
    <S.Container type="button" onClick={handleSubscribe}>
      <S.Label>Inscreva-se</S.Label>
    </S.Container>
  )
}
