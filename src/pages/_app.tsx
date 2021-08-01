import type { AppProps } from 'next/app'
import { Provider as NextAuthProvider } from 'next-auth/client'

import { ThemeProvider } from 'styled-components'

import GlobalStyle from '~/styles/GlobalStyles'
import * as themes from '~/styles/themes'
import * as C from '~/components'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <ThemeProvider theme={themes.dark}>
        <GlobalStyle />
        <C.MetaTags />
        <C.Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </NextAuthProvider>
  )
}
