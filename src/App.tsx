import React, { useRef, useState, useEffect } from 'react'
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, GraduationCap, User2, Send, BookOpen, Cpu, ChevronDown, ChevronUp, Menu, X } from 'lucide-react'
import { sendForm } from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast'
import ReCAPTCHA from 'react-google-recaptcha'

import project1Image from "../assets/project1_embrace.png";
import project2Image from "../assets/project3_aimassist.jpg";
import project3Image from "../assets/project2_riot.jpg";
import project4Image from "../assets/project4_root_blossom.png";
import project5Image from "../assets/project_additional5_tea.jpg";
import project6Image from "../assets/project_additional6_restaurant.jpg";
import headshot from "../assets/headshot.jpg";


function App() {
  const formRef = useRef<HTMLFormElement>(null)
  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [activeSection, setActiveSection] = useState('about')
  const [showMoreProjects, setShowMoreProjects] = useState(false)
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
      
      // Update active section based on scroll position
      const sections = ['about', 'portfolio', 'experience','contact']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return
    if (!captchaToken) {
      toast.error('Please verify that you are not a robot')
      return
    }

    setIsSubmitting(true)
    try {
      const result = await sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      
      if (result.status === 200) {
        toast.success('Message sent successfully!')
        formRef.current.reset()
        setCaptchaToken(null)
        recaptchaRef.current?.reset()
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('EmailJS error:', error)
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token)
  }

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element){
      const offset = 70;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY-offset;

      window.scrollTo({top:elementPosition, behavior:'smooth'});
    }
    // element?.scrollIntoView({ behavior: 'smooth' })
  }

  const initialProjects = [
    {
      title: "iEmbraceland App",
      description: "A meditation app that incorporates haptic feedback to enhance the grounding experience. Meditation sessions feel more immersive and personalized. Currently, only for iOS.",
      image: project1Image,
      tech: ["React Native", "Swift", "AWS Lambda"],
      github: "https://github.com/osmond-jian",
      demo: "https://apps.apple.com/us/app/iembraceland/id6740446690"
    },
    {
      title: "AIm Assist",
      description: "An AI Chatbot that uses in-game stats from game data to help Valorant team managers build the perfect team using user prompts. This app was part of the Devpost hackathon, and placed 5th.",
      image: project2Image,
      tech: ["Javascript", "Python", "Claude3.5"],
      github: "https://github.com/Chowd224/AIm_Assist",
      demo: "https://devpost.com/software/aimassist"
    },
    {
      title: "Global Esports Ranking",
      description: "Using game data from Riot Games, this app predicts how strong and what placement League of Legends teams have. This was part of the Devpost hackathon, and placed 2nd place.",
      image: project3Image,
      tech: ["Javascript", "Python", "R"],
      github: "https://github.com/osmond-jian/riot_esports_ranking",
      demo: "https://globalesportsranking.netlify.app/"
    }
  ]

  const additionalProjects = [
    {
      title: "iEmbrace Product Page",
      description: "The official page for the Embrace app and the upcoming hardware device.",
      image: project4Image,
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/osmond-jian/root-and-blossom",
      demo: "https://iembraceland.com/"
    },
    {
      title: "Tea Store Page",
      description: "A sample website for a tea shop, with a reservation form and a map.",
      image: project5Image,
      tech: ["Javascript", "Bootstrap", "JQuery"],
      github: "https://github.com/osmond-jian",
      demo: "https://teahut-template.netlify.app/"
    },
    {
      title: "Restaurant Page",
      description: "A sample website for a restaurant, tastefully designed with a reservation form.",
      image: project6Image,
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/osmond-jian",
      demo: "https://brewsterbargrill.netlify.app/"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Toaster position="top-right" toastOptions={{
        style: {
          background: '#1f2937',
          color: '#f3f4f6',
        },
      }} />
      
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-800/95 backdrop-blur-sm shadow-lg z-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-xl font-bold text-purple-300 relative w-[200px] flex items-center h-full">
              <span 
                className={`absolute left-0 whitespace-nowrap transition-all duration-500 ${
                  scrollPosition > 100 
                  ? '-translate-x-full opacity-0' 
                  : 'translate-x-0 opacity-100'
                }`}
              >
                Osmond Jian
              </span>
              <span 
                className={`absolute left-0 transition-all duration-500 ${
                  scrollPosition > 100 
                  ? 'translate-x-0 opacity-100' 
                  : 'translate-x-full opacity-0'
                }`}
              >
                OJ
              </span>
            </h1>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8">
              {[
                { id: 'about', label: 'About', icon: User2 },
                { id: 'portfolio', label: 'Portfolio', icon: BookOpen },
                { id: 'experience', label: 'Experience', icon: Briefcase },
                { id: 'contact', label: 'Contact', icon: Mail }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === id
                      ? 'text-purple-300 font-semibold bg-purple-500/10'
                      : 'text-gray-300 hover:text-purple-300 hover:bg-purple-500/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 hover:text-purple-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
            {[
              { id: 'about', label: 'About', icon: User2 },
              { id: 'portfolio', label: 'Portfolio', icon: BookOpen },
              { id: 'experience', label: 'Experience', icon: Briefcase },
              { id: 'contact', label: 'Contact', icon: Mail }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`flex items-center gap-2 px-4 py-3 w-full text-left transition-colors ${
                  activeSection === id
                    ? 'text-purple-300 font-semibold bg-purple-500/10'
                    : 'text-gray-300 hover:text-purple-300 hover:bg-purple-500/5'
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* About Section */}
      <section id="about" className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          {/* Hero */}
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-4xl mx-auto mb-20">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-purple-500 shadow-xl shadow-purple-500/20">
              <img src={headshot} alt="Osmond Jian" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-6 text-purple-300">Osmond Jian</h1>
              <p className="text-xl mb-8 text-gray-300">Software Developer at iEmbrace LLC | Graduate at University of Toronto</p>
              <div className="flex gap-4">
                <a href="https://github.com/osmond-jian" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/osmond-jian/" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center border-2 border-purple-500 text-purple-300 px-6 py-3 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* About Me */}
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-8">
              <User2 className="w-6 h-6 text-purple-300" />
              <h2 className="text-3xl font-bold text-white">About Me</h2>
            </div>
            <p className="text-gray-300 text-lg mb-6">
              I'm a software developer with a passion for building impactful products. Currently, I'm working at iEmbrace LLC
              where I develop features that continually improve the haptics user experience on the meditation app. With a
              strong foundation in development from years of freelance experience, I bring both theoretical knowledge
              and practical experience to solve complex problems.
            </p>
          </div>
        </div>
      </section>

      {/* Add spacing between About and Portfolio */}
      {/* <div className="mt-32"></div> */}

      {/* Portfolio Section (Now Fully Separate) */}
      <section id="portfolio" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Section Title */}
          <div className="flex items-center gap-2 mb-12">
            <Code2 className="w-6 h-6 text-purple-300" />
            <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
          </div>

          {/* Initial Featured Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initialProjects.map((project) => (
              <div key={project.title} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-300 transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-300 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Projects (Hidden until expanded) */}
          {showMoreProjects && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {additionalProjects.map((project) => (
                <div key={project.title} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-300 transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-300 transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Show More / Show Less Button */}
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowMoreProjects(!showMoreProjects)}
              className="flex items-center gap-2 text-purple-300 hover:text-purple-200 font-semibold transition-colors"
            >
              {showMoreProjects ? (
                <>
                  Show Less
                  <ChevronUp className="w-5 h-5" />
                </>
              ) : (
                <>
                  See More
                  <ChevronDown className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        </div>
      </section>


      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          {/* Experience */}
          <div className="max-w-6xl mx-auto mb-20">

            <div className="flex items-center gap-2 mb-12">
              <Briefcase className="w-6 h-6 text-purple-300" />
              <h2 className="text-3xl font-bold text-white">Experience</h2>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-900 p-8 rounded-xl shadow-md mb-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">Full-stack Software Developer</h3>
                    <p className="text-purple-300 font-medium">iEmbrace LLC</p>
                  </div>
                  <span className="text-gray-400">July 2024 - Present</span>
                </div>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Developed the main features and UI of the meditation app using React Native, Swift, and Expo</li>
                  <li>Integrated haptic experience using AHAP files created from .wav files using Python </li>
                  <li>Implemented data-driven features that improve user accessibility and usability</li>
                </ul>
              </div>
            </div>


            <div className="space-y-8">
              <div className="bg-gray-900 p-8 rounded-xl shadow-md">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">Freelance Web Developer</h3>
                    <p className="text-purple-300 font-medium">Self-Employed</p>
                  </div>
                  <span className="text-gray-400">January 2022 - February 2025</span>
                </div>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Built static websites for small and local businesses using HTML, CSS, and JavaScript</li>
                  <li>Integrated and updated content management services like WordPress and SquareSpace to improve accessibility and SEO</li>
                  <li>Handled deployment and continual maintenance to keep up with the ever-changing landscape</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="flex items-center gap-2 mb-12">
              <Cpu className="w-6 h-6 text-purple-300" />
              <h2 className="text-3xl font-bold text-white">Skills</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-900 p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4 text-white">Frontend Development</h3>
                <div className="flex flex-wrap gap-2">
                  {['JavaScript', 'TypeScript', 'React', 'Svelte', 'Replit', 'Tailwind CSS'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-purple-900/50 text-purple-300 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-gray-900 p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4 text-white">Backend Development</h3>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Python', 'GraphQL', 'LLM APIs', 'SQL', 'MongoDB'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-purple-900/50 text-purple-300 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-gray-900 p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4 text-white">Mobile Development</h3>
                <div className="flex flex-wrap gap-2">
                  {['React Native', 'Swift', 'Expo Go', 'iOS Development', 'Mobile UI/UX'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-purple-900/50 text-purple-300 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 mb-12">
              <GraduationCap className="w-6 h-6 text-purple-300" />
              <h2 className="text-3xl font-bold text-white">Education</h2>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl shadow-md mb-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Master of Arts in Anthropology</h3>
                  <p className="text-purple-300 font-medium">University of Toronto</p>
                </div>
                <span className="text-gray-400">2019 - 2020</span>
              </div>
              <p className="text-gray-300">
                Graduated with honors, specializing in medical anthropology and qualitative data
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl shadow-md">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Bachelor of Health Sciences</h3>
                  <p className="text-purple-300 font-medium">McMaster University</p>
                </div>
                <span className="text-gray-400">2013 - 2017</span>
              </div>
              <p className="text-gray-300">
                Graduated with honors, a minor in psychology, and a data-heavy thesis project on Autism Spectrum disorder with mouse models
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-purple-300">Get in Touch</h2>
              <p className="text-gray-300">
                Have a question or want to work together? Send me a message!
              </p>
            </div>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-800 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-800 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-800 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                ></textarea>
              </div>

              <div className="flex justify-center mb-6">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                  onChange={handleCaptchaChange}
                  theme="dark"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || !captchaToken}
                className="w-full bg-purple-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-6">
              <a 
                href="https://github.com/osmond-jian"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-300 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/osmondjian/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-300 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:osmond.jian@gmail.com"
                className="text-gray-300 hover:text-purple-300 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <p className="text-gray-400">© {new Date().getFullYear()} Osmond Jian. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App