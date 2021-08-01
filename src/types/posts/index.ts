export type PostsProps = {
  posts: Post[]
}

export type PostProps = {
  post: Post
}

export type Post = {
  slug: string
  title: string
  excerpt: string
  content: string
  updatedAt: string
}

export type PostPreviewProps = {
  post: Post
}
