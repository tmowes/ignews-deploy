import { signIn, signOut, useSession } from 'next-auth/client'

import { useTheme } from 'styled-components'

import * as S from './styles'

export const SignInButton = () => {
  const { colors } = useTheme()
  const [session] = useSession()

  return session?.user?.name ? (
    <S.Container type="button" onClick={() => signOut()}>
      <S.GitHubIcon color={colors.green} />
      <S.Label>{session.user.name} </S.Label>
      <S.CloseIcon />
    </S.Container>
  ) : (
    <S.Container type="button" onClick={() => signIn('github')}>
      <S.GitHubIcon color={colors.yellow5} />
      <S.Label>Logar-se com o Github</S.Label>
    </S.Container>
  )
}
