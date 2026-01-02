/**
 * About.jsx - About Section Component
 *
 * PROPS RECEIVED:
 * - description: string - The about text
 *
 * This is a simple component that receives one prop
 * and displays it in a styled section.
 */

import './About.css'

function About({ description }) {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        {/*
          The description text comes from props.
          In a more complex app, this might include
          multiple paragraphs, images, etc.
        */}
        <p className="about-description">{description}</p>

        {/* TODO: Add more elements like skills, interests, etc. */}
      </div>
    </section>
  )
}

export default About

/*
 * CHALLENGES:
 *
 * 1. Add an "image" prop for a profile picture
 *
 * 2. Add a "skills" prop (array) and display them as tags
 *
 * 3. Split the description into multiple paragraphs
 */
