import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/client'

import { RichText } from 'prismic-dom'

import * as C from '~/components'
import { getPrismicClient } from '~/services/prismic'
import * as S from '~/styles/pages/post'
import { PostProps } from '~/types/posts'

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const session = await getSession({ req })

  if (!session?.activeSubscription) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const prismic = getPrismicClient(req)

  const res = await prismic.getByUID('post', String(params?.slug), {})!

  const post = {
    slug: params?.slug,
    title: RichText.asText(res.data.title),
    content: RichText.asHtml(res.data.content!),
    updatedAt: new Date(res.last_publication_date!).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }),
  }
  return {
    props: {
      post,
    },
  }
}

export default function Post(props: PostProps) {
  const {
    post: { slug, title, content, updatedAt },
  } = props
  return (
    <S.Container>
      <C.MetaTags title={slug} />
      <S.Main>
        <S.Article>
          <S.PostTitle>{title}</S.PostTitle>
          <S.CreatedAt>{updatedAt}</S.CreatedAt>
          <S.Content dangerouslySetInnerHTML={{ __html: content }} />
        </S.Article>
      </S.Main>
    </S.Container>
  )
}
