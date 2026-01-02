/**
 * Projects.jsx - Projects Section
 */

import './Projects.css'

function ProjectCard({ project }) {
  const { title, description, image, technologies, liveUrl, githubUrl, featured } = project

  return (
    <article className={`project-card ${featured ? 'featured' : ''}`}>
      <div className="project-image">
        <img src={image} alt={`${title} preview`} />
        <div className="project-overlay">
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
              GitHub
            </a>
          )}
        </div>
      </div>

      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>

        <div className="project-technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </article>
  )
}

function Projects({ projects }) {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
