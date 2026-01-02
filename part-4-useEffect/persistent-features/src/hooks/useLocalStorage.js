/**
 * useLocalStorage.js - Custom Hook for Persistent State
 *
 * This custom hook combines useState and useEffect to create
 * state that automatically syncs with localStorage.
 *
 * WHAT IS A CUSTOM HOOK?
 * ----------------------
 * A custom hook is a JavaScript function that:
 * 1. Starts with "use" (e.g., useLocalStorage)
 * 2. Can call other hooks (useState, useEffect, etc.)
 * 3. Encapsulates reusable stateful logic
 *
 * Custom hooks let you share logic between components
 * without duplicating code!
 */

import { useState, useEffect } from 'react'

/**
 * useLocalStorage Hook
 *
 * @param {string} key - The localStorage key to use
 * @param {any} initialValue - The default value if nothing is stored
 * @returns {[any, function]} - Returns [value, setValue] like useState
 *
 * USAGE:
 * const [name, setName] = useLocalStorage('user-name', 'Guest')
 */
export function useLocalStorage(key, initialValue) {
  /**
   * STATE INITIALIZATION
   *
   * We use a function to initialize state (lazy initialization).
   * This function only runs on the first render, not on every render.
   *
   * We try to read from localStorage first. If nothing exists,
   * we fall back to the initialValue.
   */
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Try to get from localStorage
      const item = window.localStorage.getItem(key)

      // Parse stored JSON or return initialValue
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      // If error (e.g., invalid JSON), return initialValue
      console.warn(`Error reading localStorage key "${key}":`, error)
      return initialValue
    }
  })

  /**
   * EFFECT: Sync to localStorage
   *
   * Whenever storedValue or key changes, save to localStorage.
   * We use JSON.stringify to convert the value to a string.
   */
  useEffect(() => {
    try {
      // Save to localStorage
      window.localStorage.setItem(key, JSON.stringify(storedValue))
    } catch (error) {
      // Handle errors (e.g., quota exceeded)
      console.warn(`Error setting localStorage key "${key}":`, error)
    }
  }, [key, storedValue])

  /**
   * RETURN
   *
   * We return the same interface as useState: [value, setValue]
   * This makes the hook easy to use - just replace useState!
   */
  return [storedValue, setStoredValue]
}

/*
 * ============================================
 * WHY CREATE CUSTOM HOOKS?
 * ============================================
 *
 * 1. REUSABILITY
 *    Use the same logic in multiple components
 *
 * 2. SEPARATION OF CONCERNS
 *    Keep component code clean and focused
 *
 * 3. TESTABILITY
 *    Test the hook logic independently
 *
 * 4. ABSTRACTION
 *    Hide complex logic behind a simple interface
 *
 * ============================================
 * EXAMPLE USAGE:
 * ============================================
 *
 * // In any component:
 * import { useLocalStorage } from './hooks/useLocalStorage'
 *
 * function Settings() {
 *   const [theme, setTheme] = useLocalStorage('theme', 'light')
 *   const [fontSize, setFontSize] = useLocalStorage('fontSize', 16)
 *
 *   // Use them just like regular state!
 * }
 *
 * ============================================
 * CHALLENGES:
 * ============================================
 *
 * 1. Add a "remove" function that clears the localStorage key
 *
 * 2. Add an option to sync across browser tabs using
 *    the 'storage' event
 *
 * 3. Create a useSessionStorage hook for session-only storage
 */
