/**
 * DocumentTitle.jsx - Component that Updates the Document Title
 *
 * PROPS RECEIVED:
 * - title: string - The new document title
 *
 * This component demonstrates using useEffect for DOM manipulation
 * outside of React's component tree.
 *
 * WHY A COMPONENT?
 * ----------------
 * While you could put this useEffect directly in App.jsx,
 * creating a component makes the intent clear and reusable.
 */

import { useEffect } from 'react'

function DocumentTitle({ title }) {
  /**
   * EFFECT: Update document title
   *
   * This effect runs whenever the `title` prop changes.
   * It updates the browser tab title.
   */
  useEffect(() => {
    // Store the previous title so we can restore it
    const previousTitle = document.title

    // Update the document title
    document.title = title

    /**
     * CLEANUP FUNCTION
     *
     * This runs when:
     * 1. The component unmounts
     * 2. Before the effect runs again (if dependencies changed)
     *
     * We restore the previous title when this component
     * is no longer in use.
     */
    return () => {
      document.title = previousTitle
    }
  }, [title]) // Re-run when title changes

  // This component doesn't render anything visible
  // It only manages the side effect
  return null
}

export default DocumentTitle

/*
 * ============================================
 * ALTERNATIVE: As a Custom Hook
 * ============================================
 *
 * You could also write this as a custom hook:
 *
 * function useDocumentTitle(title) {
 *   useEffect(() => {
 *     document.title = title
 *   }, [title])
 * }
 *
 * // Usage in any component:
 * useDocumentTitle(`Count: ${count}`)
 *
 * Both approaches are valid! Components are nice when you
 * want to use them in JSX. Hooks are nice when you want
 * to call them in component logic.
 *
 * ============================================
 * CHALLENGES:
 * ============================================
 *
 * 1. Add a prefix: "MyApp | {title}"
 *
 * 2. Add notification count: "(3) MyApp | {title}"
 *
 * 3. Create useDocumentTitle hook version
 */
