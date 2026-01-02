/**
 * App.jsx - Main Application Component
 *
 * This is the complete portfolio bringing together all concepts:
 * - Components and Props (Parts 1-2)
 * - State Management with useState (Part 3)
 * - Side Effects with useEffect (Part 4)
 * - Custom Hooks
 * - Professional Project Structure
 */

import { useState, useEffect } from 'react'
import './App.css'

// Layout Components
import { Header, Footer } from './components/layout'

// Section Components
import { Hero, About, Experience, Projects, Contact } from './components/sections'

// Custom Hooks
import { useLocalStorage } from './hooks/useLocalStorage'

// Data
import { portfolioData } from './data/portfolioData'

function App() {
  // Theme state with persistence
  const [isDarkMode, setIsDarkMode] = useLocalStorage('portfolio-dark-mode', false)

  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Apply dark mode class to body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }, [isDarkMode])

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Toggle theme
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Close mobile menu (for nav links)
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="app">
      {/* HEADER */}
      <Header
        navigation={portfolioData.navigation}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        closeMobileMenu={closeMobileMenu}
      />

      {/* MAIN CONTENT */}
      <main className="main">
        <Hero
          name={portfolioData.personal.name}
          title={portfolioData.personal.title}
          tagline={portfolioData.personal.tagline}
          social={portfolioData.social}
        />

        <About
          description={portfolioData.about.description}
          highlights={portfolioData.about.highlights}
          skills={portfolioData.skills}
        />

        <Experience
          experiences={portfolioData.experiences}
        />

        <Projects
          projects={portfolioData.projects}
        />

        <Contact
          email={portfolioData.personal.email}
          social={portfolioData.social}
        />
      </main>

      {/* FOOTER */}
      <Footer
        name={portfolioData.personal.name}
        social={portfolioData.social}
      />
    </div>
  )
}

export default App
