/**
 * Footer.jsx - Portfolio Footer Component
 *
 * PROPS RECEIVED:
 * - name: string - Person's name for copyright
 * - social: object - Social media links
 *
 * Demonstrates:
 * - Receiving object props
 * - Conditional rendering
 * - External links with security attributes
 */

import './Footer.css'

function Footer({ name, social }) {
  // Get current year dynamically
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="footer">
      <div className="container">
        {/* Social Links */}
        <div className="footer-social">
          {/*
            We conditionally render each link only if the URL exists.
            This pattern is useful for optional props.
          */}
          {social?.github && (
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub Profile"
            >
              GitHub
            </a>
          )}

          {social?.linkedin && (
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn Profile"
            >
              LinkedIn
            </a>
          )}

          {social?.twitter && (
            <a
              href={social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Twitter Profile"
            >
              Twitter
            </a>
          )}

          {social?.email && (
            <a
              href={`mailto:${social.email}`}
              className="social-link"
              aria-label="Email"
            >
              Email
            </a>
          )}
        </div>

        {/* Copyright */}
        <p className="footer-copyright">
          {/*
            Using a JavaScript expression to show the current year
            This ensures the year is always up-to-date!
          */}
          &copy; {currentYear} {name}. All rights reserved.
        </p>

        <p className="footer-credit">
          Built with React
        </p>
      </div>
    </footer>
  )
}

export default Footer

/*
 * KEY CONCEPTS:
 *
 * 1. Optional chaining (?.) - safely access nested properties
 *    social?.github returns undefined instead of error if social is null
 *
 * 2. aria-label - improves accessibility for screen readers
 *
 * 3. mailto: links - opens default email client
 *
 * CHALLENGES:
 *
 * 1. Add icons for each social link (you can use emoji or a library)
 *
 * 2. Add a "back to top" button
 *
 * 3. Add a newsletter signup form
 */
