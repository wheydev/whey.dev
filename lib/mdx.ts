import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import type { MDXRemoteSerializeResult } from 'next-mdx-remote'

const contentDirectory = path.join(process.cwd(), 'content')

export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  content?: string
  tags?: string[]
  author?: string
}

export interface PostWithMDX extends Omit<Post, 'content'> {
  content: MDXRemoteSerializeResult
}

export async function getAllPosts(): Promise<Post[]> {
  const postsDirectory = path.join(contentDirectory, 'blog')

  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)

  const posts = await Promise.all(
    fileNames
      .filter((fileName) => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.(mdx|md)$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)
        
        return {
          slug,
          title: data.title || slug,
          date: data.pubDatetime || data.date || new Date().toISOString(),
          excerpt: data.description || data.excerpt || content.slice(0, 200) + '...',
          tags: data.tags || [],
          author: data.author || 'Eder Christian',
        }
      })
  )

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export async function getPostBySlug(slug: string): Promise<PostWithMDX | null> {
  const postsDirectory = path.join(contentDirectory, 'blog')

  let fullPath = path.join(postsDirectory, `${slug}.mdx`)
  if (!fs.existsSync(fullPath)) {
    fullPath = path.join(postsDirectory, `${slug}.md`)
  }

  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const mdxSource = await serialize(content)

  return {
    slug,
    title: data.title || slug,
    date: data.pubDatetime || data.date || new Date().toISOString(),
    excerpt: data.description || data.excerpt || content.slice(0, 200) + '...',
    content: mdxSource,
    tags: data.tags || [],
    author: data.author || 'Eder Christian',
  }
}
