/**
 * App.jsx - Main Application with useEffect for Persistence
 *
 * This component demonstrates:
 * 1. useEffect for side effects
 * 2. localStorage for persistence
 * 3. Reading saved preferences on mount
 * 4. Saving preferences when they change
 *
 * KEY DIFFERENCE FROM PART 3:
 * - Theme now PERSISTS when you refresh the page!
 * - We use useEffect to sync with localStorage
 */

import { useState, useEffect } from 'react'
import './App.css'

// Import components
import Header from './components/Header'
import ThemeToggle from './components/ThemeToggle'
import Counter from './components/Counter'
import DocumentTitle from './components/DocumentTitle'

// Import custom hook
import { useLocalStorage } from './hooks/useLocalStorage'

function App() {
  /**
   * OPTION 1: Using Custom Hook (Recommended!)
   *
   * useLocalStorage combines useState + useEffect in one hook.
   * It automatically reads from and saves to localStorage.
   */
  const [isDarkMode, setIsDarkMode] = useLocalStorage('theme-dark-mode', false)

  /**
   * OPTION 2: Manual Implementation (for learning)
   *
   * Uncomment this to see how it works step by step:
   *
   * const [isDarkMode, setIsDarkMode] = useState(false)
   *
   * // Effect 1: Read from localStorage on mount
   * useEffect(() => {
   *   const saved = localStorage.getItem('theme-dark-mode')
   *   if (saved !== null) {
   *     setIsDarkMode(JSON.parse(saved))
   *   }
   * }, []) // Empty array = run once on mount
   *
   * // Effect 2: Save to localStorage when isDarkMode changes
   * useEffect(() => {
   *   localStorage.setItem('theme-dark-mode', JSON.stringify(isDarkMode))
   * }, [isDarkMode]) // Run when isDarkMode changes
   */

  /**
   * EFFECT: Sync body class with theme state
   *
   * This effect updates the body class when isDarkMode changes.
   * This allows our CSS to apply theme-specific styles.
   */
  useEffect(() => {
    // Add or remove the dark-mode class on body
    if (isDarkMode) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }

    // CLEANUP: React will run this before next effect
    // (Not strictly needed here, but shown for completeness)
    return () => {
      // This runs before the next effect or when component unmounts
      // Useful for cleaning up subscriptions, timers, etc.
    }
  }, [isDarkMode]) // Dependency: only run when isDarkMode changes

  /**
   * Toggle Theme Function
   */
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`app ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      {/* Updates document title based on theme */}
      <DocumentTitle
        title={`Portfolio - ${isDarkMode ? 'Dark Mode' : 'Light Mode'}`}
      />

      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <main className="main-content">
        {/* PERSISTENCE DEMO */}
        <section className="demo-section">
          <div className="container">
            <h2 className="section-title">Persistent Theme</h2>
            <p className="section-description">
              Toggle the theme, then <strong>refresh the page</strong>.
              The theme persists thanks to localStorage + useEffect!
            </p>

            <ThemeToggle
              isDarkMode={isDarkMode}
              onToggle={toggleTheme}
            />

            <div className="persistence-info">
              <p>
                <span className="status-indicator success"></span>
                Theme saved to localStorage
              </p>
              <code>
                localStorage.getItem('theme-dark-mode') = "{String(isDarkMode)}"
              </code>
            </div>
          </div>
        </section>

        {/* COUNTER WITH OPTIONAL PERSISTENCE */}
        <section className="demo-section alt-bg">
          <div className="container">
            <h2 className="section-title">Counter with Persistence</h2>
            <p className="section-description">
              This counter also saves its value to localStorage.
              Try incrementing and refreshing!
            </p>

            <Counter />
          </div>
        </section>

        {/* USEEFFECT EXPLANATION */}
        <section className="demo-section">
          <div className="container">
            <h2 className="section-title">How useEffect Works</h2>

            <div className="concept-grid">
              <div className="concept-card">
                <h3>1. Component Mounts</h3>
                <p>Read saved theme from localStorage</p>
                <code>useEffect(() =&gt; {'{ ... }'}, [])</code>
              </div>

              <div className="concept-card">
                <h3>2. State Changes</h3>
                <p>Save new theme to localStorage</p>
                <code>useEffect(() =&gt; {'{ ... }'}, [isDarkMode])</code>
              </div>

              <div className="concept-card">
                <h3>3. DOM Updates</h3>
                <p>Toggle body class for styling</p>
                <code>document.body.classList.toggle()</code>
              </div>

              <div className="concept-card">
                <h3>4. Cleanup</h3>
                <p>Return a function for cleanup</p>
                <code>return () =&gt; {'{ cleanup }'}</code>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <p>Part 4: Learning useEffect Hook</p>
        <p className="footer-tip">
          Your preferences are now saved! Try closing and reopening the browser.
        </p>
      </footer>
    </div>
  )
}

export default App

/*
 * ============================================
 * USEEFFECT CHEAT SHEET:
 * ============================================
 *
 * // Run after EVERY render
 * useEffect(() => { ... })
 *
 * // Run only ONCE (on mount)
 * useEffect(() => { ... }, [])
 *
 * // Run when specific values change
 * useEffect(() => { ... }, [value1, value2])
 *
 * // With cleanup
 * useEffect(() => {
 *   // setup
 *   return () => { cleanup }
 * }, [])
 */
