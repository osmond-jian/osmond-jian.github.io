import { Github, ExternalLink } from 'lucide-react'
import type { Project } from '../data/content'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <img
        src={project.image}
        alt={`${project.title} screenshot`}
        className="w-full h-48 object-cover"
      />
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
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} source code on GitHub`}
            className="text-gray-300 hover:text-purple-300 transition-colors"
          >
            <Github className="w-5 h-5" aria-hidden="true" />
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} live demo`}
            className="text-gray-300 hover:text-purple-300 transition-colors"
          >
            <ExternalLink className="w-5 h-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  )
}
