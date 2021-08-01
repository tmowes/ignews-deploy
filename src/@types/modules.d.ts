/* eslint-disable prettier/prettier */
type CustomEnvVar =
  | 'GITHUB_CLIENT_ID'
  | 'GITHUB_CLIENT_SECRET'
  | 'FAUNADB_KEY'
  | 'NEXT_PUBLIC_STRIPE_KEY'
  | 'STRIPE_API_KEY'
  | 'STRIPE_WEBHOOK_KEY'
  | 'STRIPE_SUCCESS_URL'
  | 'STRIPE_CANCEL_URL'
  | 'PRISMIC_KEY'
  | 'PRISMIC_URL'

type ProcessEnvExtended = {
  [key in CustomEnvVar]: string
}

declare namespace NodeJS {
  export interface ProcessEnv extends ProcessEnvExtended {}
}
