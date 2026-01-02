/**
 * ThemeToggle.jsx - Theme Toggle with Visual Feedback
 */

import './ThemeToggle.css'

function ThemeToggle({ isDarkMode, onToggle }) {
  return (
    <div className="theme-toggle-container">
      <button
        className={`theme-toggle ${isDarkMode ? 'dark' : 'light'}`}
        onClick={onToggle}
        aria-pressed={isDarkMode}
        aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      >
        <span className="toggle-icon sun" aria-hidden="true">☀️</span>
        <span className="toggle-switch"></span>
        <span className="toggle-icon moon" aria-hidden="true">🌙</span>
      </button>

      <span className="theme-label">
        {isDarkMode ? 'Dark Mode' : 'Light Mode'}
      </span>
    </div>
  )
}

export default ThemeToggle
