import { GetStaticProps } from 'next'

import * as C from '~/components'
import { stripe } from '~/services/stripe'
import * as S from '~/styles/pages'
import { HomeProps } from '~/types/home'

export default function Home(props: HomeProps) {
  const {
    product: { amount },
  } = props

  return (
    <>
      <C.MetaTags />
      <S.Main>
        <S.Section>
          <S.Greetings>👏 Olá, bem vindo</S.Greetings>
          <S.Title>
            Noticias sobre o mundo do <S.React>React.</S.React>
          </S.Title>
          <S.Description>Obtenha acesso a todas publicações</S.Description>
          <S.Text>por apenas {amount} /mês</S.Text>
          <C.SubscribeButton />
        </S.Section>
        <S.HeroImage src="/images/avatar.svg" alt="coding girl" />
      </S.Main>
    </>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const price = await stripe.prices.retrieve('price_1IXyLHEdGIOVJoG3Uec0ms5D', {
    expand: ['product'],
  })

  const currencyFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  const product = {
    amount: currencyFormatter.format(price.unit_amount! / 100),
  }

  console.log({ product })

  return {
    props: { product },
    revalidate: 60 * 60 * 24, // 24hours
  }
}
