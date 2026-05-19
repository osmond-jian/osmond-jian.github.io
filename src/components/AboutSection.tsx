import { Github, Linkedin, User2 } from 'lucide-react'
import { personalInfo } from '../data/content'

export default function AboutSection() {
  return (
    <section id="about" className="pt-24 pb-20">
      <div className="container mx-auto px-6">
        {/* Hero */}
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-4xl mx-auto mb-20">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-purple-500 shadow-xl shadow-purple-500/20 shrink-0">
            <img
              src={personalInfo.headshotSrc}
              alt={personalInfo.headshotAlt}
              className="w-full h-full object-cover"
              fetchPriority="high"
            />
          </div>
          <div>
            <h1 className="text-5xl font-bold mb-6 text-purple-300">{personalInfo.name}</h1>
            <p className="text-xl mb-8 text-gray-300">{personalInfo.title}</p>
            <div className="flex gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View GitHub profile"
                className="inline-flex items-center bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors"
              >
                <Github className="w-5 h-5 mr-2" aria-hidden="true" />
                GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View LinkedIn profile"
                className="inline-flex items-center border-2 border-purple-500 text-purple-300 px-6 py-3 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5 mr-2" aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* About Me */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <User2 className="w-6 h-6 text-purple-300" aria-hidden="true" />
            <h2 className="text-3xl font-bold text-white">About Me</h2>
          </div>
          <p className="text-gray-300 text-lg">{personalInfo.bio}</p>
        </div>
      </div>
    </section>
  )
}
