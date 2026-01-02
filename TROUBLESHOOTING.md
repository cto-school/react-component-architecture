# Troubleshooting Guide

> **When things go wrong, this is your first stop!**

---

## Table of Contents

1. [Setup & Installation Issues](#setup--installation-issues)
2. [Running the Development Server](#running-the-development-server)
3. [React & JSX Errors](#react--jsx-errors)
4. [Props & State Issues](#props--state-issues)
5. [useEffect Problems](#useeffect-problems)
6. [Styling Issues](#styling-issues)
7. [Build & Deployment Issues](#build--deployment-issues)
8. [General Debugging Tips](#general-debugging-tips)

---

## Setup & Installation Issues

### "npm: command not found" or "'npm' is not recognized"

**Cause**: Node.js is not installed or not in your system PATH.

**Fix**:
1. Download Node.js LTS from [nodejs.org](https://nodejs.org)
2. Run the installer (accept all defaults)
3. **Important**: Close and reopen your terminal/command prompt
4. Verify: `node --version` should show v18.x.x or higher

**Still not working?**
- Windows: Try opening a new Command Prompt as Administrator
- Mac: Try opening a new Terminal window
- Restart your computer if needed

---

### "npm install" hangs or is very slow

**Fix Options**:
1. Check your internet connection
2. Clear npm cache: `npm cache clean --force`
3. Try again: `npm install`
4. If behind a corporate firewall, check proxy settings

---

### "npm ERR! EACCES: permission denied"

**Cause**: Permission issues (mainly on Mac/Linux)

**Fix for Mac/Linux**:
```bash
sudo chown -R $(whoami) ~/.npm
npm install
```

**Or** use nvm (Node Version Manager) instead of direct installation.

---

### "node_modules" folder is missing

**Cause**: Dependencies not installed yet.

**Fix**: Run `npm install` in the project folder.

---

## Running the Development Server

### "Port 5173 is already in use"

**Cause**: Another dev server is running somewhere.

**Fix Options**:

1. **Find and close the other terminal** running `npm run dev`

2. **Use a different port**:
   ```bash
   npm run dev -- --port 3000
   ```

3. **Kill the process using the port** (advanced):
   - Windows: `netstat -ano | findstr :5173` then `taskkill /PID <PID> /F`
   - Mac/Linux: `lsof -i :5173` then `kill -9 <PID>`

---

### Dev server starts but browser shows blank page

**Diagnosis Steps**:

1. **Check the terminal** - Is there an error message?
2. **Check the browser console** (F12 → Console tab) - Red errors?
3. **Check the URL** - Should be `http://localhost:5173` (or whatever port is shown)

**Common Causes**:
- Syntax error in your code (check terminal)
- Missing export in a component
- Broken import path

---

### Changes not appearing in browser

**Fix Steps**:

1. **Hard refresh**: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
2. **Check if file is saved**: Look for dot indicator in VS Code tab
3. **Check terminal for errors**: Red text means something broke
4. **Restart dev server**: `Ctrl + C` to stop, then `npm run dev`

---

## React & JSX Errors

### "Module not found: Can't resolve './Component'"

**Cause**: The import path is wrong or the file doesn't exist.

**Fix Steps**:
1. Check the file exists at that path
2. Check the filename matches exactly (case-sensitive!)
3. Check the relative path (`./ ` = same folder, `../` = parent folder)

**Example**:
```jsx
// If Greeting.jsx is in src/components/
import Greeting from './components/Greeting'  // From App.jsx in src/
import Greeting from '../components/Greeting' // From a file in src/pages/
```

---

### "Adjacent JSX elements must be wrapped in an enclosing tag"

**Cause**: Component returns multiple elements at the same level.

**Wrong**:
```jsx
function MyComponent() {
  return (
    <h1>Title</h1>
    <p>Content</p>
  )
}
```

**Fix** - Wrap in a fragment `<>...</>` or `<div>`:
```jsx
function MyComponent() {
  return (
    <>
      <h1>Title</h1>
      <p>Content</p>
    </>
  )
}
```

---

### "React does not recognize the `X` prop on a DOM element"

**Cause**: Passing a custom prop to a native HTML element.

**Example Problem**:
```jsx
<div isOpen={true}>  // isOpen is not a valid HTML attribute!
```

**Fix**: Only pass valid HTML attributes to DOM elements, or use a custom component.

---

### "'X' is not defined" error

**Cause**: You're using something that hasn't been imported or declared.

**Common Fixes**:
```jsx
// Forgot to import React hooks?
import { useState, useEffect } from 'react'

// Forgot to import a component?
import Header from './components/Header'

// Forgot to declare a variable?
const name = "Alex"
```

---

### Component not rendering

**Check List**:
1. [ ] Is the component exported? `export default ComponentName`
2. [ ] Is it imported where you use it?
3. [ ] Is it actually used in JSX? `<ComponentName />`
4. [ ] Does it return something? (Not `undefined` or `null` unintentionally)
5. [ ] Is the component name capitalized? `<Header />` not `<header />`

---

## Props & State Issues

### Props are undefined

**Diagnosis**:
```jsx
function MyComponent({ name }) {
  console.log('Name prop:', name)  // Add this to debug
  return <h1>Hello, {name}</h1>
}
```

**Common Causes**:
1. **Prop not passed**: `<MyComponent />` instead of `<MyComponent name="Alex" />`
2. **Typo in prop name**: `<MyComponent nmae="Alex" />`
3. **Wrong destructuring**: `function MyComponent(name)` instead of `function MyComponent({ name })`

---

### State doesn't update when I change it

**Wrong**:
```jsx
count = count + 1  // This doesn't work!
```

**Right**:
```jsx
setCount(count + 1)  // Use the setter function
```

**Still not working?** State updates are asynchronous:
```jsx
setCount(count + 1)
console.log(count)  // Still shows OLD value!

// To see new value, use useEffect:
useEffect(() => {
  console.log('Count is now:', count)
}, [count])
```

---

### "Too many re-renders" error

**Cause**: Calling setState directly in the component body.

**Wrong**:
```jsx
function MyComponent() {
  const [count, setCount] = useState(0)
  setCount(count + 1)  // This causes infinite loop!
  return <p>{count}</p>
}
```

**Right** - Use event handlers or useEffect:
```jsx
function MyComponent() {
  const [count, setCount] = useState(0)
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  )
}
```

---

## useEffect Problems

### Effect runs more times than expected

**Check your dependency array**:
```jsx
// Runs on EVERY render (probably wrong)
useEffect(() => {
  console.log('Running')
})

// Runs ONCE (probably what you want for initial setup)
useEffect(() => {
  console.log('Mounted')
}, [])

// Runs when count changes
useEffect(() => {
  console.log('Count changed')
}, [count])
```

---

### Infinite loop with useEffect

**Cause**: Setting state that's in the dependency array.

**Wrong**:
```jsx
useEffect(() => {
  setData(data + 1)  // data changes → effect runs → data changes...
}, [data])
```

**Fix**: Rethink your logic. Usually you want empty `[]` for one-time effects.

---

### localStorage returns null

**Cause**: Nothing was saved with that key, or wrong key.

**Debug**:
```jsx
// Check what's actually in localStorage
console.log('All localStorage:', localStorage)
console.log('Theme value:', localStorage.getItem('theme'))
```

**Fix**: Make sure you're using the same key name for save and load.

---

### "Cannot read property of null" with useEffect

**Cause**: Running effect before element exists.

**Example**: Trying to access a ref before the component mounts.

**Fix**: Add null checks:
```jsx
useEffect(() => {
  if (elementRef.current) {
    // Safe to use elementRef.current here
  }
}, [])
```

---

## Styling Issues

### CSS not applying

**Check List**:
1. [ ] Is the CSS file imported? `import './MyComponent.css'`
2. [ ] Is the className spelled correctly? (case-sensitive!)
3. [ ] Is it `className` not `class`? (JSX uses className)
4. [ ] Check browser DevTools → Elements → Styles to see if CSS is loaded

---

### Dark mode not working

**Check**:
1. Is the dark mode class being added?
   ```jsx
   console.log('Dark mode:', isDarkMode)
   // Check in DevTools if class changes
   ```

2. Do your CSS variables change for dark mode?
   ```css
   .dark-theme {
     --bg-color: #1a1a1a;
   }
   ```

3. Are components using the CSS variables?
   ```css
   body {
     background-color: var(--bg-color);
   }
   ```

---

## Build & Deployment Issues

### "npm run build" fails

**Common Fixes**:
1. Fix all ESLint errors shown in terminal
2. Fix all TypeScript errors (if using TypeScript)
3. Make sure all imports resolve correctly
4. Check for unused variables (warnings become errors in build)

---

### Build works but deployed site shows blank page

**Cause**: Usually a path issue.

**For GitHub Pages**, add to `vite.config.js`:
```js
export default defineConfig({
  base: '/your-repo-name/',
  // ...
})
```

**For Vercel/Netlify**: Usually works out of the box. Check the build logs.

---

## General Debugging Tips

### 1. Read the Error Message

Error messages tell you:
- **What** went wrong
- **Where** (file and line number)
- **Why** (sometimes)

### 2. Use console.log liberally

```jsx
function MyComponent({ data }) {
  console.log('MyComponent received:', data)
  // ...
}
```

### 3. Check the Browser Console

Press `F12` → Console tab. Red messages are errors.

### 4. Use React DevTools

Install the React Developer Tools browser extension to inspect:
- Component hierarchy
- Props values
- State values

### 5. Isolate the Problem

Comment out code until it works, then add back piece by piece to find the culprit.

### 6. Google the Exact Error

Copy the error message and search. Someone has likely had the same issue!

---

## Still Stuck?

1. Take a 10-minute break (seriously, it helps!)
2. Re-read the relevant part's README
3. Check if you missed a step
4. Ask a classmate
5. Ask your instructor

---

**Remember**: Every error is a learning opportunity. You've got this!
