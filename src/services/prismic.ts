import Prismic from '@prismicio/client'

export const getPrismicClient = (req?: unknown) =>
  Prismic.client(process.env.PRISMIC_URL, {
    req,
    accessToken: process.env.PRISMIC_KEY,
  })
