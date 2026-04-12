import { render, screen } from '@testing-library/react'
import Footer from '../Footer'

vi.mock('../../data/content', () => ({
  personalInfo: {
    name: 'Test User',
    github: 'https://github.com/testuser',
    linkedin: 'https://linkedin.com/in/testuser',
    email: 'test@example.com',
    headshotSrc: '/headshot.jpg',
    headshotAlt: 'Test User headshot',
    title: '',
    bio: '',
  },
}))

describe('Footer', () => {
  beforeEach(() => {
    render(<Footer />)
  })

  it('renders GitHub link with an accessible label', () => {
    const link = screen.getByRole('link', { name: /github profile/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://github.com/testuser')
  })

  it('renders LinkedIn link with an accessible label', () => {
    const link = screen.getByRole('link', { name: /linkedin profile/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://linkedin.com/in/testuser')
  })

  it('renders email link with an accessible label', () => {
    const link = screen.getByRole('link', { name: /send email/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'mailto:test@example.com')
  })

  it('renders the copyright notice with the user name', () => {
    expect(screen.getByText(/test user/i)).toBeInTheDocument()
  })

  it('external links open in a new tab', () => {
    const githubLink = screen.getByRole('link', { name: /github profile/i })
    const linkedinLink = screen.getByRole('link', { name: /linkedin profile/i })
    expect(githubLink).toHaveAttribute('target', '_blank')
    expect(linkedinLink).toHaveAttribute('target', '_blank')
  })
})
