'use client'

import { styled } from '@/stitches.config'
import Link from 'next/link'
import { format } from 'date-fns'
import { useState, useMemo } from 'react'
import type { Post } from '@/lib/mdx'

const PageHeader = styled('div', {
  paddingTop: '$12',
  paddingBottom: '$12',
  borderBottom: '1px solid $border',
})

const PageTitle = styled('h1', {
  fontSize: '$5xl',
  fontWeight: '$bold',
  marginBottom: '$4',
})

const FilterSection = styled('div', {
  display: 'flex',
  gap: '$4',
  marginTop: '$6',
  flexWrap: 'wrap',
  alignItems: 'center',
})

const FilterLabel = styled('span', {
  fontSize: '$sm',
  color: '$textMuted',
  fontWeight: '$medium',
})

const TagFilter = styled('button', {
  padding: '$2 $3',
  backgroundColor: 'transparent',
  border: '1px solid $border',
  borderRadius: '$md',
  fontSize: '$sm',
  color: '$textSecondary',
  cursor: 'pointer',
  transition: '$default',
  
  '&:hover': {
    borderColor: '$accent',
    color: '$textPrimary',
  },
  
  variants: {
    active: {
      true: {
        backgroundColor: '$accent',
        borderColor: '$accent',
        color: '$background',
      },
    },
  },
})

const PostsList = styled('div', {
  paddingTop: '$8',
})

const PostItem = styled('article', {
  paddingTop: '$8',
  paddingBottom: '$8',
  borderBottom: '1px solid $border',
  
  '&:last-child': {
    borderBottom: 'none',
  },
})

const PostTitle = styled('h2', {
  fontSize: '$2xl',
  fontWeight: '$semibold',
  marginBottom: '$2',
  
  '& a': {
    transition: '$default',
    
    '&:hover': {
      color: '$textSecondary',
    },
  },
})

const PostMeta = styled('div', {
  display: 'flex',
  gap: '$4',
  marginBottom: '$3',
  fontSize: '$sm',
  color: '$textMuted',
})

const PostExcerpt = styled('p', {
  fontSize: '$base',
  color: '$textSecondary',
  lineHeight: '$relaxed',
})

const Tag = styled('span', {
  display: 'inline-block',
  padding: '$1 $2',
  backgroundColor: '$gray2',
  borderRadius: '$sm',
  fontSize: '$xs',
  marginRight: '$2',
})

const Pagination = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$2',
  marginTop: '$12',
  paddingTop: '$8',
  borderTop: '1px solid $border',
})

const PageButton = styled('button', {
  padding: '$2 $3',
  backgroundColor: 'transparent',
  border: '1px solid $border',
  borderRadius: '$md',
  fontSize: '$sm',
  color: '$textSecondary',
  cursor: 'pointer',
  transition: '$default',
  minWidth: '$10',
  
  '&:hover:not(:disabled)': {
    borderColor: '$accent',
    color: '$textPrimary',
  },
  
  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
  
  variants: {
    active: {
      true: {
        backgroundColor: '$accent',
        borderColor: '$accent',
        color: '$background',
      },
    },
  },
})

const PageInfo = styled('span', {
  fontSize: '$sm',
  color: '$textMuted',
  padding: '0 $4',
})

interface BlogListWithPaginationProps {
  posts: Post[]
}

const POSTS_PER_PAGE = 5

export default function BlogListWithPagination({ posts }: BlogListWithPaginationProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  
  // Extract all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>()
    posts.forEach(post => {
      post.tags?.forEach(tag => tags.add(tag))
    })
    return Array.from(tags).sort()
  }, [posts])
  
  // Filter posts by selected tag
  const filteredPosts = useMemo(() => {
    if (!selectedTag) return posts
    return posts.filter(post => post.tags?.includes(selectedTag))
  }, [posts, selectedTag])
  
  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE
  const currentPosts = filteredPosts.slice(startIndex, endIndex)
  
  // Reset to page 1 when filter changes
  const handleTagFilter = (tag: string | null) => {
    setSelectedTag(tag)
    setCurrentPage(1)
  }
  
  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = []
    const maxVisible = 5
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i)
        }
        pages.push('...')
        pages.push(totalPages)
      } else if (currentPage >= totalPages - 2) {
        pages.push(1)
        pages.push('...')
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i)
        }
      } else {
        pages.push(1)
        pages.push('...')
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i)
        }
        pages.push('...')
        pages.push(totalPages)
      }
    }
    
    return pages
  }
  
  return (
    <>
      <PageHeader>
        <PageTitle>Blog</PageTitle>
        
        {allTags.length > 0 && (
          <FilterSection>
            <FilterLabel>Filter by tag:</FilterLabel>
            <TagFilter
              active={!selectedTag}
              onClick={() => handleTagFilter(null)}
            >
              All
            </TagFilter>
            {allTags.map(tag => (
              <TagFilter
                key={tag}
                active={selectedTag === tag}
                onClick={() => handleTagFilter(tag)}
              >
                {tag}
              </TagFilter>
            ))}
          </FilterSection>
        )}
      </PageHeader>
      
      <PostsList>
        {currentPosts.length === 0 ? (
          <p>No posts found.</p>
        ) : (
          currentPosts.map((post) => (
            <PostItem key={post.slug}>
              <PostTitle>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </PostTitle>
              
              <PostMeta>
                <span>{format(new Date(post.date), 'MMM dd, yyyy')}</span>
                {post.author && <span>by {post.author}</span>}
              </PostMeta>
              
              <PostExcerpt>{post.excerpt}</PostExcerpt>
              
              {post.tags && post.tags.length > 0 && (
                <div style={{ marginTop: '12px' }}>
                  {post.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              )}
            </PostItem>
          ))
        )}
      </PostsList>
      
      {totalPages > 1 && (
        <Pagination>
          <PageButton
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
          >
            Previous
          </PageButton>
          
          {getPageNumbers().map((page, index) => (
            page === '...' ? (
              <PageInfo key={`ellipsis-${index}`}>...</PageInfo>
            ) : (
              <PageButton
                key={page}
                active={currentPage === page}
                onClick={() => setCurrentPage(page as number)}
              >
                {page}
              </PageButton>
            )
          ))}
          
          <PageButton
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
          >
            Next
          </PageButton>
        </Pagination>
      )}
      
      <PageInfo style={{ display: 'block', textAlign: 'center', marginTop: '$4' }}>
        Showing {startIndex + 1}-{Math.min(endIndex, filteredPosts.length)} of {filteredPosts.length} posts
        {selectedTag && ` (filtered by "${selectedTag}")`}
      </PageInfo>
    </>
  )
}