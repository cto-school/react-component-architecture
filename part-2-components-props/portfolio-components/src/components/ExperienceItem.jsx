/**
 * ExperienceItem.jsx - Individual Experience Entry Component
 *
 * PROPS RECEIVED:
 * - role: string - Job title
 * - company: string - Company name
 * - location: string - Job location
 * - startDate: string - Start date
 * - endDate: string | null - End date (null = "Present")
 * - description: string - Job description
 * - technologies: array - Technologies used
 *
 * This is a REUSABLE component - it renders a single experience entry.
 * The parent component (Experience.jsx) creates multiple instances,
 * each with different props.
 */

import './ExperienceItem.css'

function ExperienceItem({
  role,
  company,
  location,
  startDate,
  endDate,
  description,
  technologies
}) {
  return (
    <article className="experience-item">
      {/* Header with role and dates */}
      <div className="experience-header">
        <h3 className="experience-role">{role}</h3>
        <span className="experience-dates">
          {startDate} — {endDate || 'Present'}
          {/*
            CONDITIONAL RENDERING:
            If endDate is null/undefined, we show "Present"
            This is a common pattern using the || (OR) operator
          */}
        </span>
      </div>

      {/* Company and location */}
      <div className="experience-company">
        <span className="company-name">{company}</span>
        <span className="company-location">{location}</span>
      </div>

      {/* Description */}
      <p className="experience-description">{description}</p>

      {/* Technologies used */}
      {technologies && technologies.length > 0 && (
        <div className="experience-technologies">
          {/*
            CONDITIONAL RENDERING:
            We only render this section if technologies exists
            and has at least one item.

            Then we map over the array to create a tag for each tech.
          */}
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      )}
    </article>
  )
}

export default ExperienceItem

/*
 * KEY CONCEPTS DEMONSTRATED:
 *
 * 1. Receiving multiple props and destructuring them
 *
 * 2. Conditional rendering with && and ||
 *
 * 3. Mapping over arrays within a component
 *
 * 4. Clean, semantic HTML structure
 *
 * CHALLENGES:
 *
 * 1. Add a company logo/image prop
 *
 * 2. Add an "achievements" prop (array of bullet points)
 *
 * 3. Add animation when the item comes into view
 */
