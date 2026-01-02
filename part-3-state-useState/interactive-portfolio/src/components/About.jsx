/**
 * About.jsx - About Section (Theme-aware)
 *
 * This component doesn't receive theme props directly,
 * but it still respects the theme through CSS variables!
 *
 * The theme change in App.jsx updates CSS variables on body,
 * which automatically affects all components using those variables.
 */

import './About.css'

function About({ description }) {
  return (
    <section className="about">
      <div className="container">
        <h2 className="section-title">About This Demo</h2>
        <p className="about-description">{description}</p>

        <div className="about-features">
          <div className="feature-card">
            <span className="feature-icon">🎨</span>
            <h3>Theme Toggle</h3>
            <p>Switch between light and dark modes using useState</p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">🔢</span>
            <h3>Counter</h3>
            <p>Increment, decrement, and reset with state management</p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">⚡</span>
            <h3>Re-rendering</h3>
            <p>Watch components update instantly when state changes</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
