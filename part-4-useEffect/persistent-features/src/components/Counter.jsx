/**
 * Counter.jsx - Counter with localStorage Persistence
 *
 * This counter uses our custom useLocalStorage hook
 * to persist its value across page refreshes.
 */

import './Counter.css'
import { useLocalStorage } from '../hooks/useLocalStorage'

function Counter() {
  /**
   * Using useLocalStorage instead of useState
   *
   * The count will be saved to localStorage automatically!
   * Key: 'counter-value'
   * Initial value: 0
   */
  const [count, setCount] = useLocalStorage('counter-value', 0)

  const increment = () => setCount(prev => prev + 1)
  const decrement = () => setCount(prev => Math.max(0, prev - 1))
  const reset = () => setCount(0)

  return (
    <div className="counter">
      <div className="counter-display">
        <span className="counter-value">{count}</span>
      </div>

      <div className="counter-buttons">
        <button
          className="counter-btn decrement"
          onClick={decrement}
          disabled={count === 0}
        >
          −
        </button>

        <button className="counter-btn reset" onClick={reset}>
          Reset
        </button>

        <button className="counter-btn increment" onClick={increment}>
          +
        </button>
      </div>

      <p className="counter-message">
        {count === 0 && "Start counting!"}
        {count > 0 && count < 10 && "Keep going!"}
        {count >= 10 && "Great job! 🎉"}
      </p>

      <p className="persistence-note">
        ✓ Value persists on refresh
      </p>
    </div>
  )
}

export default Counter
