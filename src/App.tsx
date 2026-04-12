import { Toaster } from 'react-hot-toast'
import NavBar from './components/NavBar'
import AboutSection from './components/AboutSection'
import PortfolioSection from './components/PortfolioSection'
import ExperienceSection from './components/ExperienceSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#1f2937',
            color: '#f3f4f6',
          },
        }}
      />

      {/* Skip link — visually hidden until focused, for keyboard/screen-reader users */}
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
    </div>
  )
}

export default App
