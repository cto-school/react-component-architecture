/**
 * Header.jsx - Portfolio Header Component
 *
 * PROPS RECEIVED:
 * - name: string - The person's name
 * - title: string - Professional title
 *
 * This component demonstrates:
 * - Receiving and using props
 * - Destructuring props in the function parameter
 * - Simple, focused component design
 */

import './Header.css'

/**
 * Header Component
 *
 * Notice how we destructure { name, title } directly in the parameter.
 * This is equivalent to:
 *
 * function Header(props) {
 *   const { name, title } = props;
 *   ...
 * }
 */
function Header({ name, title }) {
  return (
    <header className="header">
      <div className="header-content">
        {/*
          Using props in JSX
          The values come from the parent component (App.jsx)
        */}
        <h1 className="header-name">{name}</h1>
        <p className="header-title">{title}</p>

        {/* Navigation links */}
        <nav className="header-nav">
          {/*
            In a real app, these might scroll to sections
            or link to different pages
          */}
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header

/*
 * CHALLENGES:
 *
 * 1. Add a profile image prop and display it
 *
 * 2. Add a "tagline" prop for a short description
 *
 * 3. Make the navigation links dynamic (pass them as a prop)
 *
 * 4. Add a "theme" prop to change the header color scheme
 */
