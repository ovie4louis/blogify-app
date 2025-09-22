'use client'

import { useState, useEffect } from 'react'
import { BlogPost, BlogPostFilters } from '@/types/blog'
import { getBlogPosts } from '@/lib/api'

export function useBlogPosts(filters?: BlogPostFilters) {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true)
        setError(null)
        const data = await getBlogPosts(filters)
        setPosts(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch posts')
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [filters])

  return { posts, loading, error, refetch: () => fetchPosts() }
}


