/**
 * Experience.jsx - Experience Section
 */

import './Experience.css'

function ExperienceItem({ experience }) {
  const { role, company, location, startDate, endDate, description, achievements, technologies } = experience

  return (
    <article className="experience-item">
      <div className="experience-header">
        <div>
          <h3 className="experience-role">{role}</h3>
          <p className="experience-company">{company} • {location}</p>
        </div>
        <span className="experience-dates">
          {startDate} — {endDate || 'Present'}
        </span>
      </div>

      <p className="experience-description">{description}</p>

      {achievements && (
        <ul className="experience-achievements">
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      )}

      <div className="experience-technologies">
        {technologies.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>
    </article>
  )
}

function Experience({ experiences }) {
  return (
    <section id="experience" className="experience section">
      <div className="container">
        <h2 className="section-title">Experience</h2>

        <div className="experience-list">
          {experiences.map((experience) => (
            <ExperienceItem key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
