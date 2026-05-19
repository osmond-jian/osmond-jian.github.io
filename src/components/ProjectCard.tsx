import { Github, ExternalLink } from 'lucide-react'
import type { Project } from '../data/content'

interface ProjectCardProps {
  project: Project
}

function screenshotUrl(siteUrl: string): string {
  return `https://s0.wp.com/mshots/v1/${encodeURIComponent(siteUrl)}?w=640&h=400`
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const imgSrc = project.image ?? screenshotUrl(project.screenshot ?? project.demo)

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col">
      <img
        src={imgSrc}
        alt={`${project.title} screenshot`}
        className="w-full h-48 object-cover bg-gray-200 dark:bg-gray-700"
        loading="lazy"
      />
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source code on GitHub`}
              className="text-gray-500 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-300 transition-colors"
            >
              <Github className="w-5 h-5" aria-hidden="true" />
            </a>
          )}
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} live demo`}
            className="text-gray-500 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-300 transition-colors"
          >
            <ExternalLink className="w-5 h-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  )
}
