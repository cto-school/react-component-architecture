/**
 * Header.jsx - Main Navigation Header
 */

import { useScrollPosition } from '../../hooks/useScrollPosition'
import './Header.css'

function Header({
  navigation,
  isDarkMode,
  toggleTheme,
  isMobileMenuOpen,
  toggleMobileMenu,
  closeMobileMenu
}) {
  const { isScrolled } = useScrollPosition()

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Logo */}
        <a href="#home" className="logo">
          Portfolio
        </a>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="header-actions">
          {/* Theme Toggle */}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>

          {/* Mobile Menu Button */}
          <button
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav className={`nav-mobile ${isMobileMenuOpen ? 'open' : ''}`}>
        {navigation.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="nav-link-mobile"
            onClick={closeMobileMenu}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Header
