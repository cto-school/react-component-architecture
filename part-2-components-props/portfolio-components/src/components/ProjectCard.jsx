/**
 * ProjectCard.jsx - Individual Project Card Component
 *
 * PROPS RECEIVED:
 * - title: string - Project title
 * - description: string - Project description
 * - image: string - Image URL
 * - technologies: array - Technologies used
 * - liveUrl: string - URL to live demo
 * - githubUrl: string - URL to GitHub repo
 *
 * This reusable component displays a single project
 * as a visually appealing card with image, info, and links.
 */

import './ProjectCard.css'

function ProjectCard({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl
}) {
  return (
    <article className="project-card">
      {/* Project Image */}
      <div className="project-image">
        <img src={image} alt={`${title} preview`} />

        {/* Overlay with links - shown on hover */}
        <div className="project-overlay">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              GitHub
            </a>
          )}
        </div>
      </div>

      {/* Project Info */}
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>

        {/* Technologies */}
        {technologies && technologies.length > 0 && (
          <div className="project-technologies">
            {technologies.map((tech, index) => (
              <span key={index} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}

export default ProjectCard

/*
 * KEY PATTERNS DEMONSTRATED:
 *
 * 1. Conditional rendering for optional links
 *
 * 2. Security best practices:
 *    - target="_blank" opens in new tab
 *    - rel="noopener noreferrer" prevents security vulnerabilities
 *
 * 3. Accessible alt text using props
 *
 * CHALLENGES:
 *
 * 1. Add a "category" prop and display it as a badge
 *
 * 2. Add a "date" prop showing when the project was completed
 *
 * 3. Add click tracking or analytics
 */
