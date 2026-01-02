# Part 3: State Management with useState

> **Skill Level**: Beginner-Intermediate | **Time**: 60 minutes | **Builds On**: Parts 1-2

---

## What You'll Learn in This Part

By the end of Part 3, you will:

- [ ] Understand what **state** is and why it matters
- [ ] Use the **useState** hook to manage changing data
- [ ] Build a **counter** component
- [ ] Implement a **dark mode** toggle
- [ ] Understand how state updates trigger **re-renders**

---

## What You'll Build

An interactive portfolio with:
- A toggle button that switches between light and dark mode
- A counter that tracks button clicks
- Real-time UI updates when state changes

```
+--------------------------------------------------+
|  Header                        [Sun/Moon Toggle] |
+--------------------------------------------------+
|                                                  |
|  Theme Toggle Demo                               |
|  Current theme: [Dark/Light]                     |
|                                                  |
|  +----------+                                    |
|  |  Toggle  |  <-- Click this and EVERYTHING     |
|  +----------+      changes color!                |
|                                                  |
+--------------------------------------------------+
|                                                  |
|  Counter Demo                                    |
|                                                  |
|       +---+   +-------+   +---+                  |
|       | - |   |   5   |   | + |                  |
|       +---+   +-------+   +---+                  |
|                                                  |
|           "Keep going!"                          |
|                                                  |
+--------------------------------------------------+
```

---

## Key Concepts Explained Simply

### 1. What is State?

**Real-world analogy**: State is like a whiteboard in your room. You can write on it, erase it, and update it. Whatever is written on it at any moment is its "state."

**Technical definition**: State is data that can **change over time** in your component. When state changes, React automatically updates the screen.

**Examples of state**:
| What Changes | Type of State |
|--------------|---------------|
| A counter value | Number |
| Light/dark mode | Boolean (true/false) |
| Form input text | String |
| Is menu open? | Boolean |
| List of items | Array |

**The Big Difference from Props**:

| Props | State |
|-------|-------|
| Passed IN from parent | Created INSIDE component |
| Read-only (can't change) | Can be updated |
| Like function arguments | Like component's memory |

---

### 2. The useState Hook

A **hook** is a special function that lets you "hook into" React features. `useState` lets you add state to your component.

```jsx
import { useState } from 'react'

function Counter() {
  // Declare a state variable called "count"
  // Initial value is 0
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Add 1
      </button>
    </div>
  )
}
```

**Breaking it down**:

```jsx
const [count, setCount] = useState(0)
      ^^^^^  ^^^^^^^^          ^
        |        |             |
        |        |             +-- Initial value (starting point)
        |        |
        |        +-- Function to UPDATE the value
        |
        +-- The CURRENT value
```

---

### 3. How State Updates Work

When you call `setCount(newValue)`:

```
1. You call setCount(5)
        |
        v
2. React schedules an update
        |
        v
3. React re-runs your component function
        |
        v
4. useState returns the NEW value (5)
        |
        v
5. Your JSX uses the new value
        |
        v
6. React updates what you see on screen
```

**Key Insight**: The component function runs again! That's why you see the new value.

---

### 4. Rules of Hooks

**Must follow these rules**:

1. **Only call hooks at the TOP level**
   ```jsx
   // GOOD
   function Counter() {
     const [count, setCount] = useState(0)
     return <div>{count}</div>
   }

   // BAD - inside a condition
   function Counter() {
     if (something) {
       const [count, setCount] = useState(0) // NO!
     }
   }
   ```

2. **Only call hooks in React components or custom hooks**
   ```jsx
   // GOOD - in a component
   function Counter() {
     const [count, setCount] = useState(0)
   }

   // BAD - in a regular function
   function calculateTotal() {
     const [total, setTotal] = useState(0) // NO!
   }
   ```

---

## Project Structure

```
interactive-portfolio/
|
+-- src/
|   +-- components/
|   |   +-- Counter.jsx         <-- Learn state with numbers
|   |   +-- Counter.css
|   |   +-- ThemeToggle.jsx     <-- Learn state with booleans
|   |   +-- ThemeToggle.css
|   |   +-- Header.jsx          <-- Uses theme state
|   |   +-- Header.css
|   |   +-- About.jsx
|   |   +-- About.css
|   |
|   +-- App.jsx                 <-- Owns the theme state
|   +-- App.css
|   +-- main.jsx
+-- ...
```

---

## Step-by-Step Instructions

### Step 1: Navigate to the Project

```bash
cd part-3-state-useState/interactive-portfolio
```

### Step 2: Install & Start

```bash
npm install
npm run dev
```

### Step 3: Open in Browser

Go to `http://localhost:5173`

**Success Indicators**:
- [ ] You see a theme toggle button
- [ ] Clicking it switches between light and dark
- [ ] You see a counter you can increment/decrement

---

## Explore the Code

### 1. The Counter Component (`src/components/Counter.jsx`)

This is the clearest example of state in action:

```jsx
function Counter() {
  // STATE: A number that can change
  const [count, setCount] = useState(0)

  // FUNCTIONS: How we change the state
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(0)

  return (
    <div>
      <span>{count}</span>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>+</button>
    </div>
  )
}
```

**Try This**:
1. Click the + button several times
2. Watch the number update
3. Click Reset
4. The number goes back to 0!

**What's Happening**:
- Each click calls `setCount` with a new value
- React re-renders the component
- You see the updated count

---

### 2. The Theme Toggle (`src/components/ThemeToggle.jsx`)

Boolean state (true/false) is perfect for toggles:

```jsx
// In App.jsx - the parent owns the state
const [isDarkMode, setIsDarkMode] = useState(false)

const toggleTheme = () => {
  setIsDarkMode(!isDarkMode)  // Flip: false -> true, true -> false
}
```

**Breaking down the toggle**:
```
isDarkMode = false
     |
     | User clicks toggle
     v
setIsDarkMode(!false)  -->  setIsDarkMode(true)
     |
     | React re-renders
     v
isDarkMode = true
     |
     | User clicks again
     v
setIsDarkMode(!true)  -->  setIsDarkMode(false)
```

---

### 3. Conditional Styling Based on State

The whole page changes based on one boolean:

```jsx
// In App.jsx
<div className={isDarkMode ? 'dark-theme' : 'light-theme'}>
```

**Reading this**:
- If `isDarkMode` is true → use 'dark-theme' class
- If `isDarkMode` is false → use 'light-theme' class

---

## Understanding State Flow

```
              App.jsx
        [isDarkMode, setIsDarkMode]
                    |
    +---------------+---------------+
    |               |               |
    v               v               v
  Header       ThemeToggle       Counter
(receives     (receives        (has its OWN
 isDarkMode)   isDarkMode       count state)
               onToggle)

KEY INSIGHT:
- Theme state lives in App (shared by multiple components)
- Counter state lives in Counter (only it needs it)
```

**Why does theme state live in App?**
Because Header, ThemeToggle, and even the body background all need to know the theme. If it lived in ThemeToggle, Header couldn't access it!

---

## Common Patterns

### Pattern 1: Toggling Booleans

```jsx
const [isOpen, setIsOpen] = useState(false)

// Toggle function
const toggle = () => setIsOpen(!isOpen)

// Or inline
<button onClick={() => setIsOpen(!isOpen)}>
```

---

### Pattern 2: Functional Updates

When the new value depends on the old value, use a function:

```jsx
// Simple update (okay for most cases)
setCount(count + 1)

// Functional update (safer for rapid updates)
setCount(prevCount => prevCount + 1)
```

**Why functional updates?**
If you click really fast, multiple updates might use the same "old" value. The functional form always uses the latest:

```jsx
// If count is 0 and you click twice very fast:

// Simple way - might both see count as 0!
setCount(count + 1)  // 0 + 1 = 1
setCount(count + 1)  // 0 + 1 = 1 (not 2!)

// Functional way - always uses latest
setCount(prev => prev + 1)  // 0 + 1 = 1
setCount(prev => prev + 1)  // 1 + 1 = 2 (correct!)
```

---

### Pattern 3: Conditional Rendering

Show different things based on state:

```jsx
// Method 1: Ternary operator
{count === 0 ? "Start counting!" : `Count: ${count}`}

// Method 2: && operator
{count > 10 && <p>Great job!</p>}

// Method 3: Multiple conditions
{count === 0 && <p>Start counting!</p>}
{count > 0 && count < 10 && <p>Keep going!</p>}
{count >= 10 && <p>Awesome!</p>}
```

---

## Expected Output

### Light Mode:
```
+--------------------------------------------------+
|  [Light Background]                   [Moon]     |
+--------------------------------------------------+
|  Theme: Light Mode                               |
|  Current theme: Light                            |
+--------------------------------------------------+
|  Counter: 0                                      |
|  [ - ]  [ Reset ]  [ + ]                         |
|  "Start counting!"                               |
+--------------------------------------------------+
```

### Dark Mode:
```
+--------------------------------------------------+
|  [Dark Background]                    [Sun]      |
+--------------------------------------------------+
|  Theme: Dark Mode                                |
|  Current theme: Dark                             |
+--------------------------------------------------+
|  Counter: 5                                      |
|  [ - ]  [ Reset ]  [ + ]                         |
|  "Keep going!"                                   |
+--------------------------------------------------+
```

---

## Challenges

### Challenge 1: Add Reset Button (Easy)

In `Counter.jsx`:
1. Add a button that sets count back to 0
2. Disable the button when count is already 0

```jsx
<button onClick={reset} disabled={count === 0}>
  Reset
</button>
```

---

### Challenge 2: Prevent Negative Count (Easy)

Modify decrement to not go below 0:

```jsx
const decrement = () => {
  setCount(prev => {
    if (prev <= 0) return 0
    return prev - 1
  })
}
```

---

### Challenge 3: Step Input (Medium)

Add an input to control how much to increment/decrement by:

```jsx
const [step, setStep] = useState(1)

const increment = () => setCount(count + step)

<input
  type="number"
  value={step}
  onChange={(e) => setStep(Number(e.target.value))}
/>
```

---

### Challenge 4: Multiple Themes (Advanced)

Instead of just light/dark, add more themes:

```jsx
const [theme, setTheme] = useState('light')

const themes = ['light', 'dark', 'blue', 'green']

const nextTheme = () => {
  const currentIndex = themes.indexOf(theme)
  const nextIndex = (currentIndex + 1) % themes.length
  setTheme(themes[nextIndex])
}
```

---

## Common Mistakes to Avoid

### Mistake 1: Mutating State Directly

```jsx
// WRONG - directly changing state
count = count + 1

// CORRECT - use the setter function
setCount(count + 1)
```

### Mistake 2: Calling Functions Instead of Passing Them

```jsx
// WRONG - calls immediately!
<button onClick={increment()}>

// CORRECT - passes the function
<button onClick={increment}>

// ALSO CORRECT - arrow function
<button onClick={() => increment()}>
```

### Mistake 3: Hooks Inside Conditions

```jsx
// WRONG
if (something) {
  const [value, setValue] = useState(0)
}

// CORRECT - hooks at top level, logic elsewhere
const [value, setValue] = useState(0)
if (something) {
  // use value here
}
```

---

## Check Your Understanding

Before moving to Part 4:

1. **What is state?** Data that can change over time in a component
2. **What does useState return?** An array: [currentValue, setterFunction]
3. **What triggers a re-render?** Calling the setter function with a new value
4. **When use functional updates?** When new value depends on previous value
5. **Where should shared state live?** In the closest common ancestor component

---

## Summary

In this part, you learned:

- [x] What state is and why it's important
- [x] How to use the `useState` hook
- [x] Building interactive features (counter, dark mode)
- [x] How state updates trigger re-renders
- [x] The difference between props and state

---

## Before Moving to Part 4

Checklist:
- [ ] Counter increments and decrements correctly
- [ ] Dark mode toggle switches the theme
- [ ] You understand that state changes cause re-renders
- [ ] You know the difference between props and state

**Important Observation**: Try refreshing the page. Notice how the theme resets to light mode? That's because state only lives in memory. In Part 4, we'll fix that!

---

## What's Next?

**Part 4: Side Effects with useEffect**

In the next part, you'll learn:
- How to **save** the theme preference
- What **side effects** are
- The **useEffect** hook
- **Persisting** data with localStorage

**Key Question**: When you refresh, the theme resets. How do we make it "remember" your preference?

**Answer**: We need to save it somewhere that survives refresh - that's localStorage, and we need useEffect to coordinate it!

---

## Part 3 Troubleshooting

### State doesn't update

**Check**:
1. Are you using the setter function? `setCount`, not `count = `
2. Is the new value actually different?
3. Check the console for errors

### Theme toggle doesn't work

**Check**:
1. Is `isDarkMode` being passed correctly?
2. Is the CSS class changing? (Inspect element)
3. Does the CSS file have `.dark-theme` and `.light-theme` styles?

### Counter shows NaN

**Cause**: Trying to do math with non-numbers
**Fix**: Make sure initial value is a number: `useState(0)` not `useState("0")`

---

**Previous**: [Part 2 - Components & Props](../part-2-components-props/README.md)

**Next**: [Part 4 - Side Effects & useEffect](../part-4-useEffect/README.md)
