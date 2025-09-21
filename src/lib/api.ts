import { BlogPost, CreateBlogPostData, UpdateBlogPostData, BlogPostFilters } from '@/types/blog'
import { collection, doc, getDocs, getDoc, addDoc, updateDoc, deleteDoc, query, where, orderBy, limit as firestoreLimit, startAfter } from 'firebase/firestore'
import { db } from './firebase'

// Mock data for development
const mockPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with AI-Assisted Development',
    slug: 'getting-started-ai-assisted-development',
    excerpt: 'Learn how to leverage AI tools to accelerate your development workflow and build better software faster.',
    content: `# Getting Started with AI-Assisted Development

Artificial Intelligence is revolutionizing how we write code. In this comprehensive guide, we'll explore how to integrate AI tools into your development workflow to boost productivity and code quality.

## Why AI-Assisted Development?

Traditional development often involves:
- Writing boilerplate code
- Manual testing
- Documentation tasks
- Debugging complex issues

AI can help with all of these tasks, allowing developers to focus on:
- Creative problem-solving
- Architecture decisions
- User experience design
- Business logic implementation

## Key Benefits

### 1. Faster Development
AI can generate code snippets, components, and even entire features in seconds rather than hours.

### 2. Better Code Quality
AI tools can suggest improvements, catch potential bugs, and enforce best practices.

### 3. Comprehensive Testing
Generate unit tests, integration tests, and edge cases automatically.

### 4. Documentation
Auto-generate documentation, comments, and README files.

## Getting Started

Here's a simple example of how to use AI for code generation:

\`\`\`javascript
// AI-generated React component
import React, { useState } from 'react';

const BlogPostEditor = ({ post, onSave }) => {
  const [content, setContent] = useState(post?.content || '');
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await onSave(content);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="blog-editor">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your blog post..."
      />
      <button onClick={handleSave} disabled={isSaving}>
        {isSaving ? 'Saving...' : 'Save'}
      </button>
    </div>
  );
};

export default BlogPostEditor;
\`\`\`

## Best Practices

1. **Start Small**: Begin with simple tasks like generating boilerplate code
2. **Review Everything**: Always review AI-generated code before using it
3. **Iterate**: Use AI suggestions as a starting point, then refine
4. **Learn**: Understand what the AI is doing to improve your own skills

## Conclusion

AI-assisted development is not about replacing developers—it's about augmenting our capabilities and allowing us to focus on what humans do best: creative problem-solving and building amazing user experiences.

The future of development is collaborative, with AI as our coding partner.`,
    coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
    author: {
      id: '1',
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      bio: 'Senior Developer and AI enthusiast'
    },
    tags: ['AI', 'Development', 'Productivity', 'Tutorial'],
    publishedAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
    readTime: 8,
    views: 1250,
    likes: 42,
    isPublished: true,
    isDraft: false
  },
  {
    id: '2',
    title: 'Building Real-time Collaboration Features',
    slug: 'building-real-time-collaboration-features',
    excerpt: 'A deep dive into implementing real-time collaboration features using WebSockets and modern web technologies.',
    content: `# Building Real-time Collaboration Features

Real-time collaboration is becoming essential for modern web applications. In this post, we'll explore how to build collaborative features that allow multiple users to work together seamlessly.

## The Challenge

Building real-time features involves several complex challenges:
- Managing concurrent edits
- Resolving conflicts
- Maintaining data consistency
- Providing smooth user experience

## Technologies We'll Use

- **WebSockets** for real-time communication
- **Operational Transform** for conflict resolution
- **React** for the frontend
- **Node.js** for the backend

## Implementation

Let's start with a basic WebSocket server:

\`\`\`javascript
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

const clients = new Map();

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    const data = JSON.parse(message);
    
    switch (data.type) {
      case 'join':
        clients.set(ws, data.roomId);
        break;
      case 'edit':
        broadcastToRoom(data.roomId, data, ws);
        break;
    }
  });
  
  ws.on('close', () => {
    clients.delete(ws);
  });
});

function broadcastToRoom(roomId, data, sender) {
  clients.forEach((clientRoomId, client) => {
    if (clientRoomId === roomId && client !== sender) {
      client.send(JSON.stringify(data));
    }
  });
}
\`\`\`

## Conflict Resolution

When multiple users edit the same content simultaneously, we need to resolve conflicts:

\`\`\`javascript
class OperationalTransform {
  static transform(operation, otherOperation) {
    // Implementation of operational transform
    // This is a simplified version
    return {
      ...operation,
      position: operation.position + otherOperation.length
    };
  }
}
\`\`\`

## Frontend Integration

On the frontend, we need to handle incoming changes:

\`\`\`javascript
const useCollaboration = (roomId) => {
  const [content, setContent] = useState('');
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080');
    
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      
      if (data.type === 'edit') {
        setContent(prev => applyEdit(prev, data.edit));
      }
    };
    
    return () => ws.close();
  }, [roomId]);
  
  return { content, users };
};
\`\`\`

## Best Practices

1. **Optimistic Updates**: Update UI immediately, then sync with server
2. **Conflict Resolution**: Use operational transform for text editing
3. **User Presence**: Show who's currently editing
4. **Offline Support**: Handle network disconnections gracefully

## Conclusion

Real-time collaboration is complex but incredibly powerful. With the right tools and techniques, you can build applications that feel magical to use.

The key is to start simple and gradually add more sophisticated features as your needs grow.`,
    coverImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop',
    author: {
      id: '2',
      name: 'Mike Chen',
      email: 'mike@example.com',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      bio: 'Full-stack developer specializing in real-time applications'
    },
    tags: ['WebSockets', 'Real-time', 'Collaboration', 'JavaScript'],
    publishedAt: '2024-01-10T14:30:00Z',
    updatedAt: '2024-01-10T14:30:00Z',
    readTime: 12,
    views: 890,
    likes: 28,
    isPublished: true,
    isDraft: false
  },
  {
    id: '3',
    title: 'Modern CSS Techniques for Better UX',
    slug: 'modern-css-techniques-better-ux',
    excerpt: 'Explore advanced CSS techniques that can significantly improve user experience and make your applications more engaging.',
    content: `# Modern CSS Techniques for Better UX

CSS has evolved tremendously over the years. Today's CSS offers powerful features that can dramatically improve user experience. Let's explore some modern techniques.

## CSS Grid and Flexbox

Modern layout systems have revolutionized how we structure web pages:

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

.card {
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
}
\`\`\`

## Custom Properties (CSS Variables)

CSS custom properties make your styles more maintainable:

\`\`\`css
:root {
  --primary-color: #3b82f6;
  --secondary-color: #64748b;
  --border-radius: 8px;
  --spacing-unit: 1rem;
}

.button {
  background-color: var(--primary-color);
  border-radius: var(--border-radius);
  padding: var(--spacing-unit);
  color: white;
}
\`\`\`

## Animations and Transitions

Smooth animations can make your app feel more polished:

\`\`\`css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-in {
  animation: fadeInUp 0.6s ease-out;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid var(--primary-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
\`\`\`

## Responsive Design

Mobile-first responsive design is essential:

\`\`\`css
/* Mobile first */
.hero {
  padding: 2rem 1rem;
  text-align: center;
}

/* Tablet */
@media (min-width: 768px) {
  .hero {
    padding: 4rem 2rem;
    text-align: left;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .hero {
    padding: 6rem 4rem;
    display: flex;
    align-items: center;
  }
}
\`\`\`

## Dark Mode Support

Implementing dark mode is easier than ever:

\`\`\`css
:root {
  --bg-color: #ffffff;
  --text-color: #1f2937;
  --border-color: #e5e7eb;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg-color: #1f2937;
    --text-color: #f9fafb;
    --border-color: #374151;
  }
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
}
\`\`\`

## Performance Considerations

Optimize your CSS for better performance:

1. **Use efficient selectors**
2. **Minimize repaints and reflows**
3. **Use transform and opacity for animations**
4. **Leverage CSS containment**

## Conclusion

Modern CSS offers incredible power for creating beautiful, performant user interfaces. By leveraging these techniques, you can build applications that not only look great but also provide excellent user experiences.

The key is to stay updated with new CSS features and best practices, and always consider performance implications of your styling choices.`,
    coverImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop',
    author: {
      id: '3',
      name: 'Emma Davis',
      email: 'emma@example.com',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      bio: 'Frontend developer and CSS enthusiast'
    },
    tags: ['CSS', 'UX', 'Design', 'Frontend'],
    publishedAt: '2024-01-05T09:15:00Z',
    updatedAt: '2024-01-05T09:15:00Z',
    readTime: 6,
    views: 2100,
    likes: 67,
    isPublished: true,
    isDraft: false
  }
]

export async function getBlogPosts(filters?: BlogPostFilters): Promise<BlogPost[]> {
  // In a real app, you would query Firestore here
  // For now, we'll return mock data with basic filtering
  
  let filteredPosts = [...mockPosts]
  
  if (filters?.search) {
    const searchTerm = filters.search.toLowerCase()
    filteredPosts = filteredPosts.filter(post =>
      post.title.toLowerCase().includes(searchTerm) ||
      post.excerpt.toLowerCase().includes(searchTerm) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    )
  }
  
  if (filters?.tags && filters.tags.length > 0) {
    filteredPosts = filteredPosts.filter(post =>
      filters.tags!.some(tag => post.tags.includes(tag))
    )
  }
  
  if (filters?.published !== undefined) {
    filteredPosts = filteredPosts.filter(post => post.isPublished === filters.published)
  }
  
  if (filters?.limit) {
    filteredPosts = filteredPosts.slice(0, filters.limit)
  }
  
  return filteredPosts
}

export async function getBlogPost(slug: string): Promise<BlogPost> {
  // In a real app, you would query Firestore here
  const post = mockPosts.find(p => p.slug === slug)
  
  if (!post) {
    throw new Error('Post not found')
  }
  
  return post
}

export async function createBlogPost(data: CreateBlogPostData): Promise<BlogPost> {
  // In a real app, you would save to Firestore here
  const newPost: BlogPost = {
    id: Date.now().toString(),
    slug: data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    ...data,
    author: {
      id: 'current-user',
      name: 'Current User',
      email: 'user@example.com'
    },
    publishedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    readTime: Math.ceil(data.content.split(' ').length / 200),
    views: 0,
    likes: 0,
    isPublished: data.isPublished ?? false,
    isDraft: !data.isPublished
  }
  
  return newPost
}

export async function updateBlogPost(data: UpdateBlogPostData): Promise<BlogPost> {
  // In a real app, you would update Firestore here
  const existingPost = mockPosts.find(p => p.id === data.id)
  
  if (!existingPost) {
    throw new Error('Post not found')
  }
  
  const updatedPost: BlogPost = {
    ...existingPost,
    ...data,
    updatedAt: new Date().toISOString()
  }
  
  return updatedPost
}

export async function deleteBlogPost(id: string): Promise<void> {
  // In a real app, you would delete from Firestore here
  const index = mockPosts.findIndex(p => p.id === id)
  
  if (index === -1) {
    throw new Error('Post not found')
  }
  
  mockPosts.splice(index, 1)
}
