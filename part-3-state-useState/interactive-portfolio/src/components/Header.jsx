/**
 * Header.jsx - Header with Theme Support
 *
 * PROPS RECEIVED:
 * - isDarkMode: boolean - Current theme state
 * - toggleTheme: function - Function to toggle theme
 *
 * Demonstrates receiving state from parent component
 */

import './Header.css'

function Header({ isDarkMode, toggleTheme }) {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Interactive Portfolio</h1>
        <p className="header-subtitle">
          Learning React State Management
        </p>

        {/* Quick theme toggle in header */}
        <button
          className="header-theme-btn"
          onClick={toggleTheme}
          aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
        >
          {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
    </header>
  )
}

export default Header
