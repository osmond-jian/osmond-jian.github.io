import { render, screen, fireEvent } from '@testing-library/react'
import NavBar from '../NavBar'

describe('NavBar', () => {
  beforeEach(() => {
    render(<NavBar />)
  })

  it('renders all four navigation items on desktop', () => {
    // Each nav item appears twice (desktop + mobile), getAllByRole is used
    const aboutButtons = screen.getAllByRole('button', { name: 'About' })
    expect(aboutButtons.length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('button', { name: 'Portfolio' }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('button', { name: 'Experience' }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('button', { name: 'Contact' }).length).toBeGreaterThanOrEqual(1)
  })

  it('hamburger button is present with correct initial aria state', () => {
    const menuButton = screen.getByRole('button', { name: /open navigation menu/i })
    expect(menuButton).toBeInTheDocument()
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
    expect(menuButton).toHaveAttribute('aria-controls', 'mobile-menu')
  })

  it('clicking the hamburger button opens the menu and toggles aria-expanded', () => {
    const menuButton = screen.getByRole('button', { name: /open navigation menu/i })
    fireEvent.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')
  })

  it('clicking the hamburger again closes the menu and updates the aria label', () => {
    const menuButton = screen.getByRole('button', { name: /open navigation menu/i })
    fireEvent.click(menuButton)
    const closeButton = screen.getByRole('button', { name: /close navigation menu/i })
    fireEvent.click(closeButton)
    expect(screen.getByRole('button', { name: /open navigation menu/i })).toHaveAttribute('aria-expanded', 'false')
  })

  it('nav has an accessible label', () => {
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument()
  })
})
