/**
 * main.jsx - The Entry Point of Your React Application
 *
 * This file is where React "starts". It does ONE important job:
 * Mount (attach) your React app to the HTML page.
 *
 * Think of it like plugging in a TV - the TV (React) needs to be
 * connected to the wall outlet (the HTML element with id="root").
 */

import React from 'react'
import ReactDOM from 'react-dom/client'

// Import your main App component
import App from './App.jsx'

// Import global styles that apply to the whole app
import './index.css'

/**
 * ReactDOM.createRoot() - Creates a "root" where React will render
 *
 * document.getElementById('root') - Finds the div in index.html
 * .render() - Tells React what to display
 *
 * <React.StrictMode> - A development helper that:
 *   - Warns about potential problems
 *   - Helps find bugs early
 *   - Only runs in development (not production)
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

/*
 * KEY TAKEAWAYS:
 *
 * 1. This file runs ONCE when the page loads
 * 2. It connects React to the HTML page
 * 3. <App /> is a component - notice the capital letter and self-closing tag
 * 4. You rarely need to modify this file
 */
