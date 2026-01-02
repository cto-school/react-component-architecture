/**
 * useScrollPosition.js - Custom Hook for Scroll Position
 *
 * Tracks the current scroll position of the page.
 * Useful for scroll-based animations and effects.
 */

import { useState, useEffect } from 'react'

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY
      setScrollPosition(position)
      setIsScrolled(position > 50) // True if scrolled more than 50px
    }

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return { scrollPosition, isScrolled }
}
