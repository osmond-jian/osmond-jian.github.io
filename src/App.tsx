import { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import NavBar from './components/NavBar'
import AboutSection from './components/AboutSection'
import PortfolioSection from './components/PortfolioSection'
import ExperienceSection from './components/ExperienceSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import { ThemeContext } from './context/ThemeContext'

function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved ? saved === 'dark' : true
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const toggleTheme = () => setIsDark(prev => !prev)

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <ScrollProgress />
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: isDark ? '#1f2937' : '#ffffff',
              color: isDark ? '#f3f4f6' : '#111827',
            },
          }}
        />

        {/* Skip link — visually hidden until focused */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-purple-500 focus:text-white focus:rounded-lg focus:font-semibold"
        >
          Skip to main content
        </a>

        <NavBar />

        <main id="main-content">
          <AboutSection />
          <PortfolioSection />
          <ExperienceSection />
          <ContactSection />
        </main>

        <Footer />
        <BackToTop />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
