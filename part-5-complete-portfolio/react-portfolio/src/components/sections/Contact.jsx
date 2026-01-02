/**
 * Contact.jsx - Contact Section
 */

import './Contact.css'

function Contact({ email, social }) {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-content">
          <p className="contact-description">
            I'm currently open to new opportunities and would love to hear from you.
            Whether you have a question, a project idea, or just want to say hi,
            feel free to reach out!
          </p>

          <a href={`mailto:${email}`} className="contact-email-btn">
            Say Hello
          </a>

          <div className="contact-social">
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
