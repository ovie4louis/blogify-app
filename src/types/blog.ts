export interface Author {
  id: string
  name: string
  email: string
  avatar?: string
  bio?: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  coverImage?: string
  author: Author
  tags: string[]
  publishedAt: string
  updatedAt: string
  readTime: number
  views: number
  likes: number
  isPublished: boolean
  isDraft: boolean
}

export interface CreateBlogPostData {
  title: string
  excerpt: string
  content: string
  coverImage?: string
  tags: string[]
  isPublished?: boolean
}

export interface UpdateBlogPostData extends Partial<CreateBlogPostData> {
  id: string
}

export interface BlogPostFilters {
  search?: string
  tags?: string[]
  author?: string
  published?: boolean
  limit?: number
  offset?: number
}


