/**
 * Greeting.jsx - Your First Custom Component!
 *
 * This is a simple component that displays a greeting message.
 * It demonstrates the basic structure of a React component.
 *
 * COMPONENT ANATOMY:
 * 1. Import statements (if needed)
 * 2. Component function
 * 3. Return JSX
 * 4. Export the component
 */

/**
 * The Greeting Component
 *
 * A functional component is just a JavaScript function that:
 * - Has a name starting with a capital letter
 * - Returns JSX (or null)
 *
 * This component is REUSABLE - you can use <Greeting /> anywhere!
 */
function Greeting() {
  // You can add logic here before the return
  const message = "Hello, React Developer!"
  const emoji = "👋"

  // What you return is what gets rendered to the screen
  return (
    <div style={styles.container}>
      {/*
        Embedding JavaScript values in JSX using curly braces
      */}
      <p style={styles.text}>
        {emoji} {message}
      </p>

      <p style={styles.subtext}>
        This message comes from the Greeting component!
      </p>

      {/* TODO: Try changing the message variable above! */}
    </div>
  )
}

/**
 * Component Styles
 *
 * In React, you can define styles as JavaScript objects.
 * Notice:
 * - camelCase property names (backgroundColor, not background-color)
 * - Values are strings (with units) or numbers (for pixels)
 *
 * This is called "CSS-in-JS" - one way to style components.
 * We'll explore other styling approaches in later parts.
 */
const styles = {
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: '1.5rem',
    borderRadius: '8px',
    marginTop: '1rem',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  },
  text: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  subtext: {
    fontSize: '0.9rem',
    opacity: 0.8,
    marginBottom: 0,
  },
}

// Export the component so other files can import it
// This is called a "default export"
export default Greeting

/*
 * ============================================
 * KEY TAKEAWAYS:
 * ============================================
 *
 * 1. Components are JavaScript functions that return JSX
 *
 * 2. Component names MUST start with a capital letter
 *    - <Greeting /> is a component
 *    - <greeting /> would be treated as an HTML tag
 *
 * 3. Components are reusable - use them anywhere!
 *
 * 4. Always export your component so it can be imported
 *
 * ============================================
 * CHALLENGES:
 * ============================================
 *
 * 1. Change the greeting message to include your name
 *
 * 2. Add another line of text to the component
 *
 * 3. Try changing the styles (colors, fonts, spacing)
 *
 * 4. Create a completely new component in a new file!
 *    - Create src/components/Footer.jsx
 *    - Import and use it in App.jsx
 */
