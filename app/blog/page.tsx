import { Layout } from '@/components/Layout'
import { Container } from '@/components/Container'
import { getAllPosts } from '@/lib/mdx'
import BlogListWithPagination from './BlogListWithPagination'

export default async function BlogPage() {
  const posts = await getAllPosts()
  
  return (
    <Layout>
      <Container>
        <BlogListWithPagination posts={posts} />
      </Container>
    </Layout>
  )
}
