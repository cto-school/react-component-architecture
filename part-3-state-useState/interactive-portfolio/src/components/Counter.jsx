/**
 * Counter.jsx - Counter Component with useState
 *
 * This component demonstrates:
 * 1. Using useState for numeric state
 * 2. Multiple ways to update state
 * 3. Event handling in React
 * 4. Functional updates (using previous state)
 */

import { useState } from 'react'
import './Counter.css'

function Counter() {
  /**
   * STATE: Count
   *
   * We initialize count to 0.
   * setCount is the function we'll use to update it.
   */
  const [count, setCount] = useState(0)

  /**
   * Increment Handler
   *
   * This adds 1 to the current count.
   * We use a functional update to ensure we're using
   * the latest value of count.
   */
  const increment = () => {
    // Functional update: receives previous value, returns new value
    setCount(prevCount => prevCount + 1)
  }

  /**
   * Decrement Handler
   *
   * This subtracts 1 from the count.
   * We also prevent going below 0.
   */
  const decrement = () => {
    setCount(prevCount => {
      // Prevent negative numbers
      if (prevCount <= 0) return 0
      return prevCount - 1
    })
  }

  /**
   * Reset Handler
   *
   * This sets count back to 0.
   * When the new value doesn't depend on the previous value,
   * you can pass the value directly instead of a function.
   */
  const reset = () => {
    setCount(0)
  }

  return (
    <div className="counter">
      <div className="counter-display">
        {/*
          The count value updates automatically when state changes.
          React re-renders the component and shows the new value.
        */}
        <span className="counter-value">{count}</span>
      </div>

      <div className="counter-buttons">
        {/*
          onClick Event Handler
          ---------------------
          We pass a function reference, NOT a function call.

          ✅ onClick={decrement}     - Correct: passes the function
          ❌ onClick={decrement()}   - Wrong: calls the function immediately!

          For inline functions:
          ✅ onClick={() => setCount(0)}  - Correct: arrow function
        */}
        <button
          className="counter-btn decrement"
          onClick={decrement}
          disabled={count === 0}  // Disable when count is 0
        >
          −
        </button>

        <button
          className="counter-btn reset"
          onClick={reset}
        >
          Reset
        </button>

        <button
          className="counter-btn increment"
          onClick={increment}
        >
          +
        </button>
      </div>

      {/* Conditional message based on count */}
      <p className="counter-message">
        {count === 0 && "Start counting!"}
        {count > 0 && count < 10 && "Keep going!"}
        {count >= 10 && "Great job! 🎉"}
      </p>
    </div>
  )
}

export default Counter

/*
 * ============================================
 * KEY TAKEAWAYS:
 * ============================================
 *
 * 1. useState returns [currentValue, setterFunction]
 *
 * 2. Use functional updates when new value depends on old:
 *    setCount(prev => prev + 1)
 *
 * 3. Direct updates when value is independent:
 *    setCount(0)
 *
 * 4. State updates are asynchronous - React batches them
 *
 * 5. Each state change triggers a re-render
 *
 * ============================================
 * CHALLENGES:
 * ============================================
 *
 * 1. Add a "Step" input that controls increment/decrement amount
 *
 * 2. Add a "Double" button that doubles the current count
 *
 * 3. Show the count in words (one, two, three...) up to 10
 *
 * 4. Add keyboard support (arrow keys to increment/decrement)
 */
