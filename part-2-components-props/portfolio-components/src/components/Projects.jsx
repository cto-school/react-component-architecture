/**
 * Projects.jsx - Projects Section Component
 *
 * PROPS RECEIVED:
 * - projects: array - Array of project objects
 *
 * Similar to Experience.jsx, this component maps over
 * an array and creates child components for each item.
 */

import './Projects.css'
import ProjectCard from './ProjectCard'

function Projects({ projects }) {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {/*
            Creating a grid of project cards
            Each project object becomes a ProjectCard component
          */}
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

/*
 * CHALLENGES:
 *
 * 1. Add filtering by technology
 *
 * 2. Add a "featured" flag and highlight featured projects
 *
 * 3. Add sorting options (newest first, alphabetical, etc.)
 */
