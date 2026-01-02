/**
 * App.jsx - Main Application Component
 *
 * This component demonstrates:
 * 1. Importing and using multiple components
 * 2. Passing props to child components
 * 3. Using data from a separate file
 * 4. Component composition (building a page from smaller pieces)
 */

import './App.css'

// Import all our components
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'

// Import our portfolio data
// Separating data from components is a good practice!
import { portfolioData } from './data/portfolioData'

function App() {
  /**
   * Destructure the data we need from portfolioData
   *
   * This makes it clear what data our app uses
   * and keeps the JSX clean
   */
  const { name, title, about, experiences, projects, social } = portfolioData

  return (
    <div className="app">
      {/*
        HEADER COMPONENT
        ----------------
        We pass `name` and `title` as props.
        The Header component will receive these and display them.
      */}
      <Header name={name} title={title} />

      <main>
        {/*
          ABOUT COMPONENT
          ---------------
          Passing the about text as a prop.
        */}
        <About description={about} />

        {/*
          EXPERIENCE COMPONENT
          --------------------
          We pass the entire experiences array.
          The Experience component will map over it and create
          ExperienceItem components for each entry.
        */}
        <Experience experiences={experiences} />

        {/*
          PROJECTS COMPONENT
          ------------------
          Similar to Experience - we pass the projects array.
          Projects will map over it and create ProjectCard components.
        */}
        <Projects projects={projects} />
      </main>

      {/*
        FOOTER COMPONENT
        ----------------
        Passing name for copyright and social links.
      */}
      <Footer name={name} social={social} />
    </div>
  )
}

export default App

/*
 * ============================================
 * DATA FLOW VISUALIZATION:
 * ============================================
 *
 *                    App.jsx
 *                       |
 *         +-------------+-------------+
 *         |             |             |
 *         v             v             v
 *     Header.jsx    About.jsx    Experience.jsx
 *    (name, title)  (description)  (experiences)
 *                                       |
 *                                       v
 *                               ExperienceItem.jsx
 *                              (individual experience)
 *
 * Each arrow represents props being passed down!
 *
 * ============================================
 * CHALLENGES:
 * ============================================
 *
 * 1. Add a new section component (e.g., Skills, Education)
 *
 * 2. Pass additional props to existing components
 *
 * 3. Try reordering the components to change the page layout
 */
