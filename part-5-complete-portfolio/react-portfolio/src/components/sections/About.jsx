/**
 * About.jsx - About Section
 */

import './About.css'

function About({ description, highlights, skills }) {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-text">
            <p className="about-description">{description}</p>

            <div className="about-highlights">
              {highlights.map((highlight, index) => (
                <div key={index} className="highlight-item">
                  <span className="highlight-check">✓</span>
                  {highlight}
                </div>
              ))}
            </div>
          </div>

          <div className="about-skills">
            <h3>Skills</h3>

            <div className="skills-category">
              <h4>Frontend</h4>
              <div className="skills-list">
                {skills.frontend.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skills-category">
              <h4>Backend</h4>
              <div className="skills-list">
                {skills.backend.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skills-category">
              <h4>Tools</h4>
              <div className="skills-list">
                {skills.tools.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
