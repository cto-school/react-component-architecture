/**
 * App.jsx - Main Application with State Management
 *
 * This component demonstrates:
 * 1. Using useState for theme management
 * 2. Passing state and state-setters as props
 * 3. Applying conditional classes based on state
 *
 * NEW CONCEPTS:
 * - useState hook
 * - State lifting (managing state in parent, passing to children)
 * - Dynamic className based on state
 */

import { useState } from 'react'
import './App.css'

// Import components
import Header from './components/Header'
import Counter from './components/Counter'
import ThemeToggle from './components/ThemeToggle'
import About from './components/About'

function App() {
  /**
   * STATE: Dark Mode
   *
   * useState returns an array with two elements:
   * 1. The current value (isDarkMode)
   * 2. A function to update it (setIsDarkMode)
   *
   * We initialize it to false (light mode by default)
   */
  const [isDarkMode, setIsDarkMode] = useState(false)

  /**
   * Toggle Theme Function
   *
   * This function flips the boolean value.
   * When called, it triggers a re-render with the new value.
   */
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)

    // Also toggle the class on the body element
    // This allows our CSS to apply theme-specific styles
    document.body.classList.toggle('dark-mode')
  }

  return (
    <div className={`app ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      {/*
        HEADER COMPONENT
        We pass both the state (isDarkMode) and the toggle function
        The Header can display the current theme and toggle it
      */}
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <main className="main-content">
        {/* THEME TOGGLE SECTION */}
        <section className="demo-section">
          <div className="container">
            <h2 className="section-title">Theme Toggle Demo</h2>
            <p className="section-description">
              Click the button below to switch between light and dark mode.
              Watch how the entire page updates!
            </p>

            {/*
              THEME TOGGLE COMPONENT
              We pass the state and toggle function as props
            */}
            <ThemeToggle
              isDarkMode={isDarkMode}
              onToggle={toggleTheme}
            />

            <p className="current-theme">
              Current theme: <strong>{isDarkMode ? 'Dark' : 'Light'}</strong>
            </p>
          </div>
        </section>

        {/* COUNTER SECTION */}
        <section className="demo-section">
          <div className="container">
            <h2 className="section-title">Counter Demo</h2>
            <p className="section-description">
              A simple counter demonstrating useState for numeric values.
            </p>

            {/*
              COUNTER COMPONENT
              This component manages its own state internally!
              It doesn't need any props to work.
            */}
            <Counter />
          </div>
        </section>

        {/* ABOUT SECTION (shows theme applies to all components) */}
        <About
          description="This portfolio demonstrates React state management.
          Notice how the dark mode applies across all sections seamlessly!"
        />
      </main>

      {/* FOOTER */}
      <footer className="app-footer">
        <p>Part 3: Learning useState Hook</p>
        <p className="footer-tip">
          Tip: Try refreshing the page - notice the theme resets?
          We'll fix that in Part 4 with useEffect!
        </p>
      </footer>
    </div>
  )
}

export default App

/*
 * ============================================
 * STATE FLOW IN THIS APP:
 * ============================================
 *
 *              App.jsx
 *         [isDarkMode state]
 *                 |
 *    +------------+------------+
 *    |            |            |
 *    v            v            v
 * Header    ThemeToggle    Counter
 * (receives   (receives    (has its
 *  state)      state)       own state)
 *
 * The App "owns" the theme state and shares it.
 * The Counter owns its own count state independently.
 *
 * ============================================
 * KEY LEARNINGS:
 * ============================================
 *
 * 1. State can be passed down as props
 * 2. State updater functions can also be passed down
 * 3. Components can have their own independent state
 * 4. State changes trigger re-renders
 */
