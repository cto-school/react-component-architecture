/**
 * Hero.jsx - Hero Section
 */

import './Hero.css'

function Hero({ name, title, tagline, social }) {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">{name}</h1>
          <h2 className="hero-title">{title}</h2>
          <p className="hero-tagline">{tagline}</p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>

          <div className="hero-social">
            {social.github && (
              <a href={social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                GitHub
              </a>
            )}
            {social.linkedin && (
              <a href={social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
