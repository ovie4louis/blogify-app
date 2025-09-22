import { render, screen, fireEvent } from '@testing-library/react'
import { Header } from '../Header'

// Mock the useAuth hook
jest.mock('@/hooks/useAuth', () => ({
  useAuth: () => ({
    user: null,
    signOut: jest.fn(),
  }),
}))

// Mock Next.js Link component
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  )
})

describe('Header Component', () => {
  it('renders the logo and brand name', () => {
    render(<Header />)
    
    expect(screen.getByText('Blogify')).toBeInTheDocument()
    expect(screen.getByText('B')).toBeInTheDocument() // Logo letter
  })

  it('renders navigation links', () => {
    render(<Header />)
    
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Posts')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
  })

  it('renders sign in and sign up buttons when user is not authenticated', () => {
    render(<Header />)
    
    expect(screen.getByText('Sign In')).toBeInTheDocument()
    expect(screen.getByText('Sign Up')).toBeInTheDocument()
  })

  it('toggles mobile menu when menu button is clicked', () => {
    render(<Header />)
    
    const menuButton = screen.getByRole('button', { name: /menu/i })
    expect(menuButton).toBeInTheDocument()
    
    // Initially, mobile menu should not be visible
    expect(screen.queryByText('Dashboard')).not.toBeInTheDocument()
    
    // Click menu button
    fireEvent.click(menuButton)
    
    // Mobile menu should now be visible
    expect(screen.getByText('Dashboard')).toBeInTheDocument()
  })
})


