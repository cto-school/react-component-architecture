/**
 * Footer.jsx - Site Footer
 */

import './Footer.css'

function Footer({ name, social }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Social Links */}
        <div className="footer-social">
          {social.github && (
            <a href={social.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
          {social.linkedin && (
            <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          )}
          {social.twitter && (
            <a href={social.twitter} target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          )}
          {social.email && (
            <a href={`mailto:${social.email}`}>
              Email
            </a>
          )}
        </div>

        {/* Copyright */}
        <p className="footer-copyright">
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
