/**
 * ThemeToggle.jsx - Dark Mode Toggle Component
 *
 * PROPS RECEIVED:
 * - isDarkMode: boolean - Current theme state
 * - onToggle: function - Function to toggle the theme
 *
 * This component demonstrates:
 * 1. Receiving state from parent via props
 * 2. Calling parent's state updater function
 * 3. Conditional rendering based on state
 * 4. Accessible toggle button
 */

import './ThemeToggle.css'

function ThemeToggle({ isDarkMode, onToggle }) {
  return (
    <div className="theme-toggle-container">
      {/*
        ACCESSIBLE BUTTON
        -----------------
        - aria-pressed: tells screen readers the toggle state
        - aria-label: describes what the button does

        We pass onToggle directly to onClick.
        When clicked, it calls the function passed from App.jsx
      */}
      <button
        className={`theme-toggle ${isDarkMode ? 'dark' : 'light'}`}
        onClick={onToggle}
        aria-pressed={isDarkMode}
        aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      >
        {/* Sun icon (shown in dark mode - click for light) */}
        <span className="toggle-icon sun" aria-hidden="true">
          ☀️
        </span>

        {/* Toggle switch indicator */}
        <span className="toggle-switch"></span>

        {/* Moon icon (shown in light mode - click for dark) */}
        <span className="toggle-icon moon" aria-hidden="true">
          🌙
        </span>
      </button>

      {/* Label showing current mode */}
      <span className="theme-label">
        {isDarkMode ? 'Dark Mode' : 'Light Mode'}
      </span>
    </div>
  )
}

export default ThemeToggle

/*
 * ============================================
 * WHY THIS PATTERN?
 * ============================================
 *
 * The theme state lives in App.jsx (the parent) because:
 * 1. Multiple components need access to it
 * 2. It affects the entire app's appearance
 * 3. We can add persistence (localStorage) in one place
 *
 * This pattern is called "lifting state up" - when multiple
 * components need the same data, we put the state in their
 * closest common ancestor.
 *
 * ============================================
 * CHALLENGES:
 * ============================================
 *
 * 1. Replace emoji with SVG icons for better cross-platform support
 *
 * 2. Add a transition animation when toggling
 *
 * 3. Add multiple theme options (light, dark, system preference)
 */
