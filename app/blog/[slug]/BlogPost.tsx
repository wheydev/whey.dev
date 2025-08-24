'use client'

import { styled } from '@/stitches.config'
import { MDXRemote } from 'next-mdx-remote'
import { format } from 'date-fns'
import Link from 'next/link'
import type { PostWithMDX } from '@/lib/mdx'

const BackLink = styled(Link, {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '$2',
  fontSize: '$sm',
  color: '$textSecondary',
  marginBottom: '$8',
  transition: '$default',

  '&:hover': {
    color: '$textPrimary',
  },

  '&::before': {
    content: '←',
    fontSize: '$base',
  },
})

const PostHeader = styled('header', {
  marginBottom: '$8',
  paddingBottom: '$8',
  borderBottom: '1px solid $border',
})

const PostTitle = styled('h1', {
  fontSize: '$4xl',
  fontWeight: '$bold',
  marginBottom: '$4',
  lineHeight: '$tight',

  '@md': {
    fontSize: '$5xl',
  },
})

const PostMeta = styled('div', {
  display: 'flex',
  gap: '$4',
  fontSize: '$sm',
  color: '$textMuted',
  marginBottom: '$6',
})

const PostExcerpt = styled('p', {
  fontSize: '$lg',
  color: '$textSecondary',
  lineHeight: '$relaxed',
  fontStyle: 'italic',
})

const PostContent = styled('div', {
  '& > *': {
    marginBottom: '$6',
  },

  '& h1, & h2, & h3, & h4, & h5, & h6': {
    fontWeight: '$semibold',
    lineHeight: '$tight',
    marginTop: '$8',
    marginBottom: '$4',
  },

  '& h1': {
    fontSize: '$3xl',
  },

  '& h2': {
    fontSize: '$2xl',
  },

  '& h3': {
    fontSize: '$xl',
  },

  '& p': {
    fontSize: '$base',
    lineHeight: '$relaxed',
    color: '$textSecondary',
  },

  '& ul, & ol': {
    paddingLeft: '$6',
    color: '$textSecondary',
  },

  '& li': {
    marginBottom: '$2',
  },

  '& blockquote': {
    borderLeft: '4px solid $border',
    paddingLeft: '$4',
    marginLeft: 0,
    fontStyle: 'italic',
    color: '$textMuted',
  },

  '& code': {
    fontFamily: '$mono',
    fontSize: '$sm',
    backgroundColor: '$gray2',
    padding: '$1 $2',
    borderRadius: '$sm',
  },

  '& pre': {
    backgroundColor: '$gray2',
    padding: '$4',
    borderRadius: '$md',
    overflow: 'auto',
    fontSize: '$sm',
    
    '& code': {
      backgroundColor: 'transparent',
      padding: 0,
    },
  },

  '& a': {
    color: '$accent',
    textDecoration: 'underline',
    
    '&:hover': {
      textDecoration: 'none',
    },
  },

  '& img': {
    width: '100%',
    height: 'auto',
    borderRadius: '$md',
  },

  '& hr': {
    border: 'none',
    borderTop: '1px solid $border',
    margin: '$8 0',
  },
})

const TagsList = styled('div', {
  display: 'flex',
  gap: '$2',
  flexWrap: 'wrap',
})

const Tag = styled('span', {
  display: 'inline-block',
  padding: '$1 $3',
  backgroundColor: '$gray2',
  borderRadius: '$full',
  fontSize: '$xs',
  fontWeight: '$medium',
})

const PostFooter = styled('footer', {
  marginTop: '$12',
  paddingTop: '$8',
  borderTop: '1px solid $border',
})

interface BlogPostProps {
  post: PostWithMDX
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <>
      <BackLink href="/blog">Back to Blog</BackLink>

      <PostHeader>
        <PostTitle>{post.title}</PostTitle>

        <PostMeta>
          <span>{format(new Date(post.date), 'MMMM dd, yyyy')}</span>
          {post.author && <span>by {post.author}</span>}
        </PostMeta>

        <PostExcerpt>{post.excerpt}</PostExcerpt>
      </PostHeader>

      <PostContent>
        <MDXRemote {...post.content} />
      </PostContent>

      {post.tags && post.tags.length > 0 && (
        <PostFooter>
          <h3 style={{ fontSize: '1.125rem', marginBottom: '0.75rem' }}>Tags</h3>
          <TagsList>
            {post.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </TagsList>
        </PostFooter>
      )}
    </>
  )
}