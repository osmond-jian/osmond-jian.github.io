import { useState, useEffect, useRef } from 'react'
import { User2, BookOpen, Briefcase, Mail, Menu, X } from 'lucide-react'

const NAV_ITEMS = [
  { id: 'about', label: 'About', icon: User2 },
  { id: 'portfolio', label: 'Portfolio', icon: BookOpen },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'contact', label: 'Contact', icon: Mail },
]

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('about')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)

      for (const { id } of NAV_ITEMS) {
        const element = document.getElementById(id)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll, { passive: true })
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false)
      }
    }
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMenuOpen])

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 70
      const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top: elementPosition, behavior: 'smooth' })
    }
  }

  return (
    <nav ref={navRef} aria-label="Main navigation" className="fixed top-0 left-0 right-0 bg-gray-800/95 backdrop-blur-sm shadow-lg z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo — decorative, aria-hidden since the name appears as the page h1 */}
          <div aria-hidden="true" className="text-xl font-bold text-purple-300 relative w-[200px] flex items-center h-full">
            <span
              className={`absolute left-0 whitespace-nowrap transition-all duration-500 ${
                isScrolled
                  ? '-translate-x-full opacity-0'
                  : 'translate-x-0 opacity-100'
              }`}
            >
              Osmond Jian
            </span>
            <span
              className={`absolute left-0 transition-all duration-500 ${
                isScrolled
                  ? 'translate-x-0 opacity-100'
                  : 'translate-x-full opacity-0'
              }`}
            >
              OJ
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                aria-current={activeSection === id ? 'page' : undefined}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === id
                    ? 'text-purple-300 font-semibold bg-purple-500/10'
                    : 'text-gray-300 hover:text-purple-300 hover:bg-purple-500/5'
                }`}
              >
                <Icon className="w-4 h-4" aria-hidden="true" />
                {label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-md p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isMenuOpen
              ? <X className="w-6 h-6" aria-hidden="true" />
              : <Menu className="w-6 h-6" aria-hidden="true" />
            }
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
        >
          {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              aria-current={activeSection === id ? 'page' : undefined}
              className={`flex items-center gap-2 px-4 py-3 w-full text-left transition-colors ${
                activeSection === id
                  ? 'text-purple-300 font-semibold bg-purple-500/10'
                  : 'text-gray-300 hover:text-purple-300 hover:bg-purple-500/5'
              }`}
            >
              <Icon className="w-4 h-4" aria-hidden="true" />
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
