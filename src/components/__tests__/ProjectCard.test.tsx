import { render, screen } from '@testing-library/react'
import ProjectCard from '../ProjectCard'
import type { Project } from '../../data/content'

const mockProject: Project = {
  title: 'Test Project',
  description: 'A test project description',
  image: '/test-image.jpg',
  tech: ['React', 'TypeScript', 'Node.js'],
  github: 'https://github.com/testuser/test-project',
  demo: 'https://demo.example.com',
}

describe('ProjectCard', () => {
  beforeEach(() => {
    render(<ProjectCard project={mockProject} />)
  })

  it('renders the project title and description', () => {
    expect(screen.getByText('Test Project')).toBeInTheDocument()
    expect(screen.getByText('A test project description')).toBeInTheDocument()
  })

  it('renders all tech stack tags', () => {
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('Node.js')).toBeInTheDocument()
  })

  it('renders the project image with descriptive alt text', () => {
    expect(screen.getByAltText('Test Project screenshot')).toBeInTheDocument()
  })

  it('GitHub link has an accessible label and correct href', () => {
    const githubLink = screen.getByRole('link', { name: /view test project source code on github/i })
    expect(githubLink).toBeInTheDocument()
    expect(githubLink).toHaveAttribute('href', 'https://github.com/testuser/test-project')
  })

  it('demo link has an accessible label and correct href', () => {
    const demoLink = screen.getByRole('link', { name: /view test project live demo/i })
    expect(demoLink).toBeInTheDocument()
    expect(demoLink).toHaveAttribute('href', 'https://demo.example.com')
  })

  it('external links open in a new tab with rel="noopener noreferrer"', () => {
    const links = screen.getAllByRole('link')
    links.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })
})
