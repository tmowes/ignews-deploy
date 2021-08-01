import { GetStaticProps } from 'next'
import Link from 'next/link'

import Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'

import * as C from '~/components'
import { getPrismicClient } from '~/services/prismic'
import * as S from '~/styles/pages/posts'
import { PostsProps } from '~/types/posts'

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const { results } = await prismic.query(
    [Prismic.predicates.at('document.type', 'post')],
    {
      fetch: ['post.title', 'post.content'],
      pageSize: 100,
    },
  )

  const posts = results.map(post => ({
    slug: post.uid,
    title: RichText.asText(post.data.title),
    excerpt:
      post.data.content.find(
        (content: { type: string }) => content.type === 'paragraph',
      ).text ?? '',
    updatedAt: new Date(post.last_publication_date!).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }),
  }))

  return {
    props: {
      posts,
    },
  }
}

export default function Posts(props: PostsProps) {
  const { posts } = props
  return (
    <S.Container>
      <C.MetaTags title="Posts" />
      <S.Main>
        <S.Post>
          {posts.map(({ slug, title, updatedAt, excerpt }) => (
            <Link key={slug} href={`/posts/${slug}`}>
              <S.Link>
                <S.PostTitle>{title}</S.PostTitle>
                <S.CreatedAt>{updatedAt}</S.CreatedAt>
                <S.Content>{excerpt}</S.Content>
              </S.Link>
            </Link>
          ))}
        </S.Post>
      </S.Main>
    </S.Container>
  )
}
