import { useState } from 'react'
import { Code2, ChevronDown, ChevronUp } from 'lucide-react'
import ProjectCard from './ProjectCard'
import { featuredProjects, additionalProjects } from '../data/content'
import RevealOnScroll from './RevealOnScroll'

export default function PortfolioSection() {
  const [showMoreProjects, setShowMoreProjects] = useState(false)

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 max-w-6xl">

        <RevealOnScroll>
          <div className="flex items-center gap-2 mb-12">
            <Code2 className="w-6 h-6 text-purple-600 dark:text-purple-300" aria-hidden="true" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Projects</h2>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, i) => (
            <RevealOnScroll key={project.title} delayMs={i * 100} className="h-full">
              <ProjectCard project={project} />
            </RevealOnScroll>
          ))}
        </div>

        {showMoreProjects && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {additionalProjects.map((project, i) => (
              <RevealOnScroll key={project.title} delayMs={i * 100} className="h-full">
                <ProjectCard project={project} />
              </RevealOnScroll>
            ))}
          </div>
        )}

        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowMoreProjects(!showMoreProjects)}
            aria-expanded={showMoreProjects}
            aria-label={showMoreProjects ? 'Show fewer projects' : 'See more projects'}
            className="flex items-center gap-2 text-purple-600 dark:text-purple-300 hover:text-purple-500 dark:hover:text-purple-200 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-md px-2 py-1"
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
