import { useState } from 'react'
import { Code2, ChevronDown, ChevronUp } from 'lucide-react'
import ProjectCard from './ProjectCard'
import { featuredProjects, additionalProjects } from '../data/content'

export default function PortfolioSection() {
  const [showMoreProjects, setShowMoreProjects] = useState(false)

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center gap-2 mb-12">
          <Code2 className="w-6 h-6 text-purple-300" aria-hidden="true" />
          <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {showMoreProjects && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {additionalProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        )}

        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowMoreProjects(!showMoreProjects)}
            aria-expanded={showMoreProjects}
            className="flex items-center gap-2 text-purple-300 hover:text-purple-200 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-md px-2 py-1"
          >
            {showMoreProjects ? (
              <>
                Show Less
                <ChevronUp className="w-5 h-5" aria-hidden="true" />
              </>
            ) : (
              <>
                See More
                <ChevronDown className="w-5 h-5" aria-hidden="true" />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  )
}
