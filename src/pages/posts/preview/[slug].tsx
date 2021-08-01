import { useEffect } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'

import { RichText } from 'prismic-dom'
import { ParsedUrlQuery } from 'querystring'

import * as C from '~/components'
import { getPrismicClient } from '~/services/prismic'
import * as S from '~/styles/pages/post'
import { PostPreviewProps } from '~/types/posts'

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: 'blocking',
})

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as ParsedUrlQuery
  const prismic = getPrismicClient()
  const { data, last_publication_date } = await prismic.getByUID(
    'post',
    String(slug),
    {},
  )!

  const post = {
    slug,
    title: RichText.asText(data.title),
    content: RichText.asHtml(data.content.splice(0, 4)),
    updatedAt: new Date(last_publication_date!).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }),
  }
  return {
    props: {
      post,
    },
    revalidate: 60 * 30,
  }
}

export default function PostPreview(props: PostPreviewProps) {
  const {
    post: { slug, title, content, updatedAt },
  } = props

  const [session] = useSession()
  const { push } = useRouter()

  useEffect(() => {
    if (session?.activeSubscription) {
      push(`/posts/${slug}`)
    }
  }, [push, session, slug])

  return (
    <S.Container>
      <C.MetaTags title={slug} />
      <S.Main>
        <S.Article>
          <S.PostTitle>{title}</S.PostTitle>
          <S.CreatedAt>{updatedAt}</S.CreatedAt>
          <S.PreviewContent dangerouslySetInnerHTML={{ __html: content }} />
          <S.ContinueReading>
            Quer continuar lendo?
            <Link href="/">
              <S.Label>Inscrever-se agora 🤗</S.Label>
            </Link>
          </S.ContinueReading>
        </S.Article>
      </S.Main>
    </S.Container>
  )
}
