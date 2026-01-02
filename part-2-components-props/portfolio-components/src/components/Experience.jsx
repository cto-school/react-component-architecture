/**
 * Experience.jsx - Experience Section Component
 *
 * PROPS RECEIVED:
 * - experiences: array - Array of experience objects
 *
 * This component demonstrates:
 * - Mapping over an array to create multiple child components
 * - Passing props to child components
 * - The importance of the "key" prop
 */

import './Experience.css'
import ExperienceItem from './ExperienceItem'

function Experience({ experiences }) {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>

        <div className="experience-list">
          {/*
            MAPPING OVER ARRAYS
            -------------------
            We use .map() to transform each experience object
            into an ExperienceItem component.

            KEY PROP:
            ---------
            React needs a unique "key" for each item in a list.
            This helps React efficiently update the UI when data changes.
            Using the item's id is ideal. Avoid using array index if possible.
          */}
          {experiences.map((experience) => (
            <ExperienceItem
              key={experience.id}
              role={experience.role}
              company={experience.company}
              location={experience.location}
              startDate={experience.startDate}
              endDate={experience.endDate}
              description={experience.description}
              technologies={experience.technologies}
            />
          ))}

          {/*
            ALTERNATIVE: Using spread operator
            You could also write:

            {experiences.map((experience) => (
              <ExperienceItem key={experience.id} {...experience} />
            ))}

            The spread operator passes all properties of the object as props.
            It's shorter but less explicit about what props are being passed.
          */}
        </div>
      </div>
    </section>
  )
}

export default Experience

/*
 * CHALLENGES:
 *
 * 1. Add a filter to show only recent experiences (last 2 years)
 *
 * 2. Add a "limit" prop to show only the first N experiences
 *
 * 3. Group experiences by year or company
 */
