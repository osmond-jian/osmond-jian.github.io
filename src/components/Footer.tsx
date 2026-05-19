import { useState } from 'react'
import { Github, Linkedin, Mail, Copy, Check } from 'lucide-react'
import { personalInfo } from '../data/content'

export default function Footer() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(personalInfo.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-6 items-center">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-gray-500 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-300 transition-colors"
            >
              <Github className="w-6 h-6" aria-hidden="true" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-gray-500 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-300 transition-colors"
            >
              <Linkedin className="w-6 h-6" aria-hidden="true" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label={`Send email to ${personalInfo.email}`}
              className="text-gray-500 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-300 transition-colors"
            >
              <Mail className="w-6 h-6" aria-hidden="true" />
            </a>
            <button
              onClick={handleCopyEmail}
              aria-label={copied ? 'Email copied to clipboard' : 'Copy email address'}
              className="text-gray-500 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-300 transition-colors"
            >
              {copied
                ? <Check className="w-6 h-6 text-green-500" aria-hidden="true" />
                : <Copy className="w-6 h-6" aria-hidden="true" />
              }
            </button>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
