import { Layout } from '@/components/Layout'
import { Container } from '@/components/Container'
import { getAllPosts, getPostBySlug } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote'
import { notFound } from 'next/navigation'
import BlogPost from './BlogPost'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }
  
  return {
    title: `${post.title} - WheyDev`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug)
  
  if (!post) {
    notFound()
  }
  
  return (
    <Layout>
      <Container size="md">
        <BlogPost post={post} />
      </Container>
    </Layout>
  )
}