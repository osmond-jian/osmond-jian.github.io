import { Briefcase, Cpu, GraduationCap, Download } from 'lucide-react'
import { workExperience, skillCategories, education, personalInfo } from '../data/content'

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">

        {/* Work Experience */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-purple-300" aria-hidden="true" />
              <h2 className="text-3xl font-bold text-white">Experience</h2>
            </div>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download resume as PDF"
              className="inline-flex items-center gap-2 bg-purple-500 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-purple-600 transition-colors"
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              Download Resume
            </a>
          </div>

          <div className="space-y-6">
            {workExperience.map((job) => (
              <div key={job.company} className="bg-gray-900 p-8 rounded-xl shadow-md">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">{job.role}</h3>
                    <p className="text-purple-300 font-medium">{job.company}</p>
                  </div>
                  <span className="text-gray-400 shrink-0">{job.period}</span>
                </div>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="flex items-center gap-2 mb-12">
            <Cpu className="w-6 h-6 text-purple-300" aria-hidden="true" />
            <h2 className="text-3xl font-bold text-white">Skills</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category) => (
              <div key={category.label} className="bg-gray-900 p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4 text-white">{category.label}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-purple-900/50 text-purple-300 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-12">
            <GraduationCap className="w-6 h-6 text-purple-300" aria-hidden="true" />
            <h2 className="text-3xl font-bold text-white">Education</h2>
          </div>

          <div className="space-y-6">
            {education.map((edu) => (
              <div key={edu.degree} className="bg-gray-900 p-8 rounded-xl shadow-md">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                    <p className="text-purple-300 font-medium">{edu.institution}</p>
                  </div>
                  <span className="text-gray-400 shrink-0">{edu.period}</span>
                </div>
                <p className="text-gray-300">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
