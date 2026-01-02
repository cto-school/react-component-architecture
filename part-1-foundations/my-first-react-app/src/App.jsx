/**
 * App.jsx - The Main Application Component
 *
 * This is the "root" component of your application.
 * Think of it as the container that holds everything else.
 *
 * KEY CONCEPTS DEMONSTRATED:
 * 1. Functional Components - Functions that return JSX
 * 2. JSX Syntax - HTML-like code in JavaScript
 * 3. Importing Components - Using other components
 * 4. CSS Imports - Styling your components
 */

// Import the CSS file for this component
import './App.css'

// Import our custom Greeting component
// Notice: Component names always start with a CAPITAL letter
import Greeting from './components/Greeting'

/**
 * The App Component
 *
 * This is a "functional component" - just a JavaScript function
 * that returns JSX (the HTML-like syntax).
 *
 * Rules for components:
 * 1. Name must start with a capital letter
 * 2. Must return JSX (or null)
 * 3. Can only return ONE parent element (use <> </> to wrap multiple)
 */
function App() {
  // You can write regular JavaScript here, before the return
  const appName = "My First React App"
  const currentYear = new Date().getFullYear()

  // Create an array to demonstrate JSX expressions
  const reactBenefits = [
    "Component-based architecture",
    "Virtual DOM for performance",
    "Large ecosystem and community",
    "Reusable code"
  ]

  // The return statement contains JSX - what gets rendered to the screen
  return (
    <div className="app">
      {/* HEADER SECTION */}
      <header className="app-header">
        {/*
          Notice: We use {curly braces} to embed JavaScript expressions
          This is how you make your UI dynamic!
        */}
        <h1>{appName}</h1>
        <p className="subtitle">
          Welcome to React! Today is {currentYear}.
        </p>
      </header>

      {/* MAIN CONTENT */}
      <main className="app-content">

        {/* CONCEPT 1: JSX Basics */}
        <section className="concept-card">
          <h2>What is JSX?</h2>
          <p>
            JSX lets you write HTML-like code in JavaScript.
            It makes building UIs feel natural and intuitive.
          </p>

          {/* Code example - notice className, not class */}
          <div className="code-example">
            <code>const element = &lt;h1&gt;Hello, World!&lt;/h1&gt;;</code>
          </div>

          <p>
            <strong>Key Differences from HTML:</strong>
          </p>
          <ul>
            <li>Use <code>className</code> instead of <code>class</code></li>
            <li>All tags must be closed: <code>&lt;img /&gt;</code></li>
            <li>Use curly braces for JavaScript: <code>{'{variable}'}</code></li>
          </ul>
        </section>

        {/* CONCEPT 2: Dynamic Content */}
        <section className="concept-card">
          <h2>Dynamic Content with JSX</h2>
          <p>
            Use curly braces to embed any JavaScript expression:
          </p>

          {/*
            IMPORTANT: We're mapping over an array to create multiple elements
            This is a common React pattern!

            The "key" prop helps React track which items changed
          */}
          <ul>
            {reactBenefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>

          {/* TODO: Try adding more items to the reactBenefits array above! */}
        </section>

        {/* CONCEPT 3: Using Custom Components */}
        <section className="concept-card demo-section">
          <h2>Your First Component</h2>
          <p>
            Below is a custom component we created.
            Components are reusable building blocks!
          </p>

          {/*
            Using our custom Greeting component!

            Notice:
            - It looks like an HTML tag but with a capital letter
            - It's self-closing (no children between opening/closing tags)
            - We can reuse it multiple times
          */}
          <Greeting />

          {/* TODO: Try adding another <Greeting /> component here! */}
        </section>

        {/* NEXT STEPS */}
        <section className="concept-card">
          <h2>What's Next?</h2>
          <p>
            You've learned the basics of React and JSX! In Part 2, we'll explore:
          </p>
          <ul>
            <li>Breaking your UI into multiple components</li>
            <li>Passing data with <strong>props</strong></li>
            <li>Building a portfolio layout</li>
          </ul>
        </section>

      </main>

      {/* FOOTER */}
      <footer style={{ marginTop: '2rem', textAlign: 'center', color: '#666' }}>
        {/*
          Notice the double curly braces for inline styles:
          style={{ property: 'value' }}

          The outer {} is for JSX expression
          The inner {} is a JavaScript object
        */}
        <p>Built with React in {currentYear}</p>
      </footer>
    </div>
  )
}

// Export the component so it can be imported elsewhere
export default App

/*
 * ============================================
 * CHALLENGES TO TRY:
 * ============================================
 *
 * 1. Add your name to the header subtitle
 *
 * 2. Create a new variable with your favorite programming language
 *    and display it somewhere in the JSX
 *
 * 3. Add more items to the reactBenefits array
 *
 * 4. Try creating inline styles for different elements
 *
 * 5. Uncomment the second <Greeting /> to see component reusability
 */
