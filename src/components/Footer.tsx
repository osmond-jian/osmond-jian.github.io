import { Github, Linkedin, Mail } from 'lucide-react'
import { personalInfo } from '../data/content'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-6">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-gray-300 hover:text-purple-300 transition-colors"
            >
              <Github className="w-6 h-6" aria-hidden="true" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-gray-300 hover:text-purple-300 transition-colors"
            >
              <Linkedin className="w-6 h-6" aria-hidden="true" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label={`Send email to ${personalInfo.email}`}
              className="text-gray-300 hover:text-purple-300 transition-colors"
            >
              <Mail className="w-6 h-6" aria-hidden="true" />
            </a>
          </div>
          <p className="text-gray-400">© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
