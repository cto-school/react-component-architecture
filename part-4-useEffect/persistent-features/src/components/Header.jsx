/**
 * Header.jsx - Header with Theme Support
 */

import './Header.css'

function Header({ isDarkMode, toggleTheme }) {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Persistent Features</h1>
        <p className="header-subtitle">
          Learning useEffect for Side Effects
        </p>

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
