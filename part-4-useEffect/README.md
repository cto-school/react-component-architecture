# Part 4: Side Effects with useEffect

> **Skill Level**: Intermediate | **Time**: 45 minutes | **Builds On**: Parts 1-3

---

## What You'll Learn in This Part

By the end of Part 4, you will:

- [ ] Understand what **side effects** are in React
- [ ] Use the **useEffect** hook for side effects
- [ ] **Persist** theme preference to localStorage (survives refresh!)
- [ ] Learn about **cleanup functions**
- [ ] Understand the **dependency array**
- [ ] Create your first **custom hook**

---

## What You'll Build

The same portfolio from Part 3, but now:
- Theme preference **saves** when you close the browser
- Document title **updates** to show current theme
- Counter value **persists** between sessions

**The Magic**: Refresh the page with dark mode on. It stays dark!

---

## Before You Start

You should understand:
- [ ] useState from Part 3
- [ ] How state changes trigger re-renders
- [ ] The difference between props and state

---

## Key Concepts Explained Simply

### 1. What are Side Effects?

**Real-world analogy**: Imagine you're cooking (that's your main job - rendering UI). Side effects are things you do WHILE cooking that affect things OUTSIDE the kitchen:
- Sending a text message (API call)
- Turning on the living room light (updating the DOM)
- Writing a grocery list for later (saving to localStorage)

**Technical definition**: Side effects are operations that affect something OUTSIDE your component, or that need to happen AFTER the component renders.

**Examples of side effects**:
| Side Effect | What It Does |
|-------------|--------------|
| API calls | Fetch data from a server |
| localStorage | Save data to the browser |
| document.title | Change the browser tab title |
| Timers | setInterval, setTimeout |
| Event listeners | window.addEventListener |

---

### 2. The useEffect Hook

`useEffect` lets you perform side effects in function components:

```jsx
import { useEffect } from 'react'

function MyComponent() {
  useEffect(() => {
    // This code runs AFTER the component renders
    document.title = 'Hello!'
  })

  return <div>My Component</div>
}
```

**Think of it like**: "Hey React, after you're done rendering, also do THIS."

---

### 3. The Dependency Array (Super Important!)

The second argument to `useEffect` controls WHEN the effect runs:

```jsx
// Pattern 1: Run after EVERY render
useEffect(() => {
  console.log('I run after every render')
})
// No second argument

// Pattern 2: Run only ONCE (when component first appears)
useEffect(() => {
  console.log('I run once when mounted')
}, [])
// Empty array = no dependencies

// Pattern 3: Run when specific values change
useEffect(() => {
  console.log('Theme changed to:', theme)
}, [theme])
// [theme] = only run when `theme` changes
```

**Visual Guide**:

```
useEffect(() => { ... })           Run after EVERY render
                                   (Usually not what you want!)

useEffect(() => { ... }, [])       Run ONCE when component mounts
                                   (Great for initial data loading)

useEffect(() => { ... }, [count])  Run when `count` changes
                                   (Perfect for syncing with external systems)
```

---

### 4. What is "Mounting"?

**Mount** = When a component first appears on screen
**Unmount** = When a component is removed from screen

```
[User visits page]
       |
       v
Component MOUNTS (appears)
       |
       v
useEffect with [] runs ONCE
       |
       v
[User interacts, state changes]
       |
       v
Component RE-RENDERS
       |
       v
useEffect with [dependency] runs IF dependency changed
       |
       v
[User navigates away]
       |
       v
Component UNMOUNTS (disappears)
       |
       v
Cleanup function runs
```

---

### 5. Cleanup Functions

Some effects need to be "cleaned up" when the component unmounts:

```jsx
useEffect(() => {
  // SETUP: Add event listener
  window.addEventListener('resize', handleResize)

  // CLEANUP: Remove event listener
  return () => {
    window.removeEventListener('resize', handleResize)
  }
}, [])
```

**Why cleanup?** Without it, you'd have "zombie" listeners running even after the component is gone - a memory leak!

---

### 6. What is localStorage?

`localStorage` is a browser feature that stores data **permanently** (survives refresh, closing browser):

```jsx
// SAVE data
localStorage.setItem('theme', 'dark')

// READ data
const theme = localStorage.getItem('theme')  // Returns 'dark'

// REMOVE data
localStorage.removeItem('theme')
```

**Important**: localStorage only stores STRINGS. For other types:
```jsx
// Saving an object or array
localStorage.setItem('user', JSON.stringify({ name: 'Alex' }))

// Reading it back
const user = JSON.parse(localStorage.getItem('user'))
```

---

## Project Structure

```
persistent-features/
|
+-- src/
|   +-- components/
|   |   +-- Header.jsx
|   |   +-- ThemeToggle.jsx
|   |   +-- Counter.jsx
|   |   +-- DocumentTitle.jsx    <-- NEW: Shows how to update document title
|   |
|   +-- hooks/
|   |   +-- useLocalStorage.js   <-- NEW: Your first custom hook!
|   |
|   +-- App.jsx                  <-- Uses useEffect for persistence
+-- ...
```

---

## Step-by-Step Instructions

### Step 1: Navigate to the Project

```bash
cd part-4-useEffect/persistent-features
```

### Step 2: Install & Start

```bash
npm install
npm run dev
```

### Step 3: Test Persistence!

1. Open `http://localhost:5173`
2. Toggle to dark mode
3. **Refresh the page**
4. It's still dark!

**Success Indicators**:
- [ ] Theme survives page refresh
- [ ] Document title shows current theme
- [ ] No console errors

---

## Understanding the Code

### 1. Persistence Pattern in `App.jsx`

Here's the core pattern for saving theme:

```jsx
// STEP 1: Create state with a default
const [isDarkMode, setIsDarkMode] = useState(false)

// STEP 2: On mount, read saved value from localStorage
useEffect(() => {
  const saved = localStorage.getItem('theme-dark-mode')
  if (saved !== null) {
    setIsDarkMode(JSON.parse(saved))
  }
}, [])  // Empty array = only run once on mount

// STEP 3: Whenever isDarkMode changes, save it
useEffect(() => {
  localStorage.setItem('theme-dark-mode', JSON.stringify(isDarkMode))
}, [isDarkMode])  // Run when isDarkMode changes
```

**The Flow**:
```
[Page loads]
     |
     v
useState(false) -> isDarkMode = false
     |
     v
First useEffect runs (empty [])
     |
     v
Reads 'theme-dark-mode' from localStorage
     |
     v
If found, setIsDarkMode(saved value)
     |
     v
isDarkMode changes!
     |
     v
Second useEffect runs ([isDarkMode])
     |
     v
Saves to localStorage

[User clicks toggle]
     |
     v
setIsDarkMode(!isDarkMode)
     |
     v
isDarkMode changes
     |
     v
useEffect saves new value to localStorage
     |
     v
[User refreshes]
     |
     v
useEffect reads it back!
```

---

### 2. The Custom Hook: `useLocalStorage`

Instead of repeating the pattern above, we created a reusable hook!

```jsx
// In hooks/useLocalStorage.js
function useLocalStorage(key, initialValue) {
  // State starts with localStorage value OR initialValue
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key)
    return saved ? JSON.parse(saved) : initialValue
  })

  // Whenever value changes, save to localStorage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  // Return same interface as useState
  return [value, setValue]
}
```

**Using it is just like useState**:
```jsx
// Instead of this (manual):
const [theme, setTheme] = useState('light')
useEffect(() => { /* save */ }, [theme])
useEffect(() => { /* load */ }, [])

// Do this (with custom hook):
const [theme, setTheme] = useLocalStorage('theme', 'light')
// That's it! Saving and loading handled automatically!
```

---

### 3. Document Title Effect

Simple example of updating something outside React:

```jsx
function DocumentTitle({ title }) {
  useEffect(() => {
    document.title = title
  }, [title])

  return null  // This component renders nothing visual
}

// Usage:
<DocumentTitle title={`Portfolio - ${isDarkMode ? 'Dark' : 'Light'}`} />
```

---

## useEffect Patterns Cheat Sheet

### Pattern 1: Run Once on Mount

```jsx
useEffect(() => {
  // Fetch initial data
  fetchUserData()
}, [])  // Empty array = no dependencies
```

**Use for**: Initial data loading, setting up subscriptions

---

### Pattern 2: Run When Value Changes

```jsx
useEffect(() => {
  // Save to localStorage when theme changes
  localStorage.setItem('theme', theme)
}, [theme])  // Runs when `theme` changes
```

**Use for**: Syncing with external systems, analytics

---

### Pattern 3: Cleanup on Unmount

```jsx
useEffect(() => {
  const interval = setInterval(() => {
    console.log('Tick')
  }, 1000)

  // This runs when component unmounts
  return () => {
    clearInterval(interval)
  }
}, [])
```

**Use for**: Timers, event listeners, subscriptions

---

### Pattern 4: Multiple Dependencies

```jsx
useEffect(() => {
  // Runs when EITHER firstName OR lastName changes
  document.title = `${firstName} ${lastName}`
}, [firstName, lastName])
```

---

## Expected Behavior

| Action | What Happens |
|--------|--------------|
| Toggle theme | Saved to localStorage |
| Refresh page | Theme loads from localStorage |
| Check browser tab | Title shows current theme |
| Close & reopen browser | Theme preference restored |

---

## Challenges

### Challenge 1: Persist Counter Value (Easy)

Make the counter save its value:

```jsx
// In Counter.jsx, change this:
const [count, setCount] = useState(0)

// To this:
import { useLocalStorage } from '../hooks/useLocalStorage'
const [count, setCount] = useLocalStorage('counter-value', 0)
```

Test it: Increment counter, refresh, value should persist!

---

### Challenge 2: System Theme Detection (Medium)

Detect user's system preference:

```jsx
useEffect(() => {
  // Check if no saved preference exists
  if (localStorage.getItem('theme-dark-mode') === null) {
    // Use system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setIsDarkMode(prefersDark)
  }
}, [])
```

---

### Challenge 3: Time-Based Greeting (Medium)

Create a component that shows different greetings based on time:

```jsx
function TimeGreeting() {
  const [greeting, setGreeting] = useState('')

  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours()
      if (hour < 12) setGreeting('Good morning!')
      else if (hour < 18) setGreeting('Good afternoon!')
      else setGreeting('Good evening!')
    }

    updateGreeting()
    const interval = setInterval(updateGreeting, 60000) // Update every minute

    return () => clearInterval(interval)  // Cleanup!
  }, [])

  return <p>{greeting}</p>
}
```

---

### Challenge 4: Window Size Tracker (Advanced)

Track window size with proper cleanup:

```jsx
function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return size
}
```

---

## Common Mistakes to Avoid

### Mistake 1: Missing Dependencies

```jsx
// WRONG - count is used but not in dependencies
useEffect(() => {
  document.title = `Count: ${count}`
}, [])  // Won't update when count changes!

// CORRECT
useEffect(() => {
  document.title = `Count: ${count}`
}, [count])
```

### Mistake 2: Infinite Loops

```jsx
// WRONG - setting state that triggers the effect again
useEffect(() => {
  setCount(count + 1)
}, [count])  // Infinite loop!

// CORRECT - usually means you need different logic
useEffect(() => {
  // Only increment once on mount
  setCount(prev => prev + 1)
}, [])
```

### Mistake 3: Forgetting Cleanup

```jsx
// WRONG - memory leak!
useEffect(() => {
  window.addEventListener('scroll', handleScroll)
}, [])

// CORRECT
useEffect(() => {
  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [])
```

---

## Check Your Understanding

Before moving to Part 5:

1. **What is a side effect?** An operation that affects something outside the component
2. **What does an empty dependency array mean?** Run once when component mounts
3. **When does cleanup run?** Before the next effect or when component unmounts
4. **Why use localStorage?** To persist data across page refreshes
5. **What makes a custom hook?** A function starting with `use` that uses other hooks

---

## Summary

In this part, you learned:

- [x] What side effects are and when to use them
- [x] How to use useEffect with dependency arrays
- [x] Persisting data with localStorage
- [x] Cleanup functions for preventing memory leaks
- [x] Creating reusable custom hooks

---

## Before Moving to Part 5

Checklist:
- [ ] Theme persists after refresh
- [ ] You understand the dependency array
- [ ] You know when cleanup is needed
- [ ] You've tried using the custom hook

---

## What's Next?

**Part 5: Complete React Portfolio**

In the final part, you'll:
- Bring **everything together**
- Build a **production-ready** portfolio
- Learn **professional patterns**
- Create **deployable code**

**Key Insight**: You now know:
- JSX and components (Part 1)
- Props for data passing (Part 2)
- State for interactivity (Part 3)
- Effects for persistence (Part 4)

Part 5 combines all of these into a real, polished project!

---

## Part 4 Troubleshooting

### localStorage not working

**Check**:
1. Are you in incognito/private mode? (localStorage may be disabled)
2. Are you using `JSON.stringify` when saving?
3. Are you using `JSON.parse` when reading?

### Effect runs too many times

**Check**:
1. Is your dependency array correct?
2. Are you accidentally changing something in the dependencies?
3. Look for infinite loops

### Cleanup function not working

**Check**:
1. Are you returning the cleanup function?
2. Is it cleaning up the exact same thing you set up?

---

**Previous**: [Part 3 - State & useState](../part-3-state-useState/README.md)

**Next**: [Part 5 - Complete Portfolio](../part-5-complete-portfolio/README.md)
