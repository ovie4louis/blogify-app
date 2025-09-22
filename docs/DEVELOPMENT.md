# Development Guide

## Getting Started

### Prerequisites
- Node.js 18 or higher
- npm or yarn package manager
- Git for version control

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/blogify-app.git
   cd blogify-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   Edit `.env.local` with your Firebase credentials.

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── auth/              # Authentication pages
│   ├── posts/             # Blog post pages
│   ├── create/            # Post creation page
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── BlogList.tsx       # Blog post listing
│   ├── BlogPost.tsx       # Individual post view
│   ├── Hero.tsx           # Landing page hero
│   └── Features.tsx       # Features showcase
├── hooks/                 # Custom React hooks
│   ├── useAuth.ts         # Authentication hook
│   ├── useBlogPosts.ts    # Blog posts hook
│   └── useBlogPost.ts     # Single post hook
├── lib/                   # Utility libraries
│   ├── firebase.ts        # Firebase configuration
│   └── api.ts             # API functions
└── types/                 # TypeScript type definitions
    └── blog.ts            # Blog-related types
```

## Key Components

### Header Component
- Responsive navigation with mobile menu
- User authentication state management
- Dynamic navigation based on user status

### BlogList Component
- Displays paginated list of blog posts
- Search and filter functionality
- Responsive grid layout

### BlogPost Component
- Individual blog post display
- Markdown rendering with syntax highlighting
- Social sharing and interaction features

### Authentication System
- Firebase Auth integration
- Protected routes and user management
- Sign in/sign up forms with validation

## API Layer

The API layer provides functions for:
- Fetching blog posts with filtering
- Creating new blog posts
- Updating existing posts
- User authentication

## Testing

### Running Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Test Structure
- Component tests in `__tests__` directories
- API tests for data layer functions
- Mock implementations for external dependencies

## Styling

### Tailwind CSS
- Utility-first CSS framework
- Custom design system with primary colors
- Responsive design patterns
- Dark mode support (planned)

### Component Styling
- Consistent spacing and typography
- Hover and focus states
- Loading and error states
- Mobile-first responsive design

## Deployment

### Vercel (Recommended)
1. Connect GitHub repository to Vercel
2. Add environment variables
3. Deploy automatically on push

### Manual Deployment
```bash
npm run build
npm start
```

## AI Development Notes

This project was built using AI-assisted development:

1. **Code Generation**: AI generated boilerplate and complex components
2. **Testing**: Automated test suite creation
3. **Documentation**: AI-generated comments and documentation
4. **Refactoring**: Iterative improvement with AI feedback

### Key AI Prompts Used
- "Generate a React component for blog post creation with Markdown support"
- "Create TypeScript types for blog post data structure"
- "Write Jest tests for the authentication hook"
- "Generate a responsive header component with user authentication"

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## Troubleshooting

### Common Issues

**Firebase connection errors**
- Check environment variables
- Verify Firebase project configuration
- Ensure proper authentication setup

**Build errors**
- Clear `.next` directory
- Reinstall dependencies
- Check TypeScript errors

**Test failures**
- Update test mocks
- Check component prop changes
- Verify test environment setup


