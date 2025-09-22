import { getBlogPosts, getBlogPost, createBlogPost } from '../api'
import { CreateBlogPostData } from '@/types/blog'

// Mock Firebase functions
jest.mock('firebase/firestore', () => ({
  collection: jest.fn(),
  doc: jest.fn(),
  getDocs: jest.fn(),
  getDoc: jest.fn(),
  addDoc: jest.fn(),
  updateDoc: jest.fn(),
  deleteDoc: jest.fn(),
  query: jest.fn(),
  where: jest.fn(),
  orderBy: jest.fn(),
  limit: jest.fn(),
  startAfter: jest.fn(),
}))

describe('API Functions', () => {
  describe('getBlogPosts', () => {
    it('should return an array of blog posts', async () => {
      const posts = await getBlogPosts()
      
      expect(Array.isArray(posts)).toBe(true)
      expect(posts.length).toBeGreaterThan(0)
      
      // Check structure of first post
      const firstPost = posts[0]
      expect(firstPost).toHaveProperty('id')
      expect(firstPost).toHaveProperty('title')
      expect(firstPost).toHaveProperty('slug')
      expect(firstPost).toHaveProperty('content')
      expect(firstPost).toHaveProperty('author')
      expect(firstPost).toHaveProperty('tags')
    })

    it('should filter posts by search term', async () => {
      const posts = await getBlogPosts({ search: 'AI' })
      
      expect(posts.length).toBeGreaterThan(0)
      posts.forEach(post => {
        const searchableText = `${post.title} ${post.excerpt} ${post.tags.join(' ')}`.toLowerCase()
        expect(searchableText).toContain('ai')
      })
    })

    it('should filter posts by tags', async () => {
      const posts = await getBlogPosts({ tags: ['AI'] })
      
      expect(posts.length).toBeGreaterThan(0)
      posts.forEach(post => {
        expect(post.tags).toContain('AI')
      })
    })
  })

  describe('getBlogPost', () => {
    it('should return a single blog post by slug', async () => {
      const post = await getBlogPost('getting-started-ai-assisted-development')
      
      expect(post).toBeDefined()
      expect(post.slug).toBe('getting-started-ai-assisted-development')
      expect(post.title).toContain('AI-Assisted Development')
    })

    it('should throw error for non-existent post', async () => {
      await expect(getBlogPost('non-existent-slug')).rejects.toThrow('Post not found')
    })
  })

  describe('createBlogPost', () => {
    it('should create a new blog post', async () => {
      const postData: CreateBlogPostData = {
        title: 'Test Post',
        excerpt: 'This is a test post',
        content: '# Test Content\n\nThis is test content.',
        tags: ['test'],
        isPublished: false,
      }

      const newPost = await createBlogPost(postData)
      
      expect(newPost).toBeDefined()
      expect(newPost.title).toBe(postData.title)
      expect(newPost.excerpt).toBe(postData.excerpt)
      expect(newPost.content).toBe(postData.content)
      expect(newPost.tags).toEqual(postData.tags)
      expect(newPost.isPublished).toBe(false)
      expect(newPost.isDraft).toBe(true)
    })

    it('should generate slug from title', async () => {
      const postData: CreateBlogPostData = {
        title: 'My Amazing Blog Post!',
        excerpt: 'Test excerpt',
        content: 'Test content',
        tags: [],
      }

      const newPost = await createBlogPost(postData)
      
      expect(newPost.slug).toBe('my-amazing-blog-post')
    })

    it('should calculate read time based on content', async () => {
      const postData: CreateBlogPostData = {
        title: 'Test Post',
        excerpt: 'Test excerpt',
        content: 'This is a test content with multiple words to calculate read time properly.',
        tags: [],
      }

      const newPost = await createBlogPost(postData)
      
      expect(newPost.readTime).toBeGreaterThan(0)
      expect(typeof newPost.readTime).toBe('number')
    })
  })
})


