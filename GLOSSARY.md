# Glossary of Terms

> **Every technical term explained in plain English**

---

## A

### API (Application Programming Interface)
A way for programs to talk to each other. When your app fetches weather data from a weather service, it's using an API.

### Array
A list of items in JavaScript. Written with square brackets: `[1, 2, 3]` or `['apple', 'banana']`.

### Arrow Function
A shorter way to write functions in JavaScript.
```jsx
// Regular function
function add(a, b) { return a + b }

// Arrow function
const add = (a, b) => a + b
```

---

## B

### Boolean
A value that's either `true` or `false`. Used for on/off states like "is dark mode enabled?"

### Build
The process of converting your development code into optimized files ready for deployment.

### Bundle
The combined, optimized JavaScript file(s) that Vite creates when you run `npm run build`.

---

## C

### Callback
A function passed to another function to be called later.
```jsx
// onClick receives a callback function
<button onClick={() => console.log('Clicked!')}>
```

### Child Component
A component used inside another component. In `<Parent><Child /></Parent>`, Child is the child component.

### className
How you add CSS classes in JSX. React uses `className` because `class` is reserved in JavaScript.

### CLI (Command Line Interface)
A text-based way to interact with your computer. The terminal/command prompt is a CLI.

### Component
A reusable piece of UI in React. Like a LEGO block - small, focused, and can be combined with others.
```jsx
function Button() {
  return <button>Click me</button>
}
```

### Conditional Rendering
Showing different content based on a condition.
```jsx
{isLoggedIn ? <Dashboard /> : <LoginForm />}
```

### CSS Custom Properties (CSS Variables)
Reusable values in CSS. Defined with `--` and used with `var()`.
```css
:root { --primary-color: blue; }
.button { background: var(--primary-color); }
```

---

## D

### Dependency
A package/library your project needs to work. Listed in `package.json`.

### Dependency Array
The second argument to useEffect that controls when the effect runs.
```jsx
useEffect(() => { ... }, [count]) // Runs when count changes
useEffect(() => { ... }, [])      // Runs once on mount
```

### Destructuring
Extracting values from objects or arrays into variables.
```jsx
// Object destructuring
const { name, age } = person

// Array destructuring
const [first, second] = array
```

### Dev Server (Development Server)
A local server that runs your app during development with hot reloading.

### DOM (Document Object Model)
The browser's representation of your HTML as a tree of objects that JavaScript can manipulate.

---

## E

### ES6 / ES2015
A major JavaScript update that added arrow functions, const/let, destructuring, and more.

### Export
Making a function, variable, or component available for other files to import.
```jsx
export default MyComponent  // Default export
export { helper }           // Named export
```

### Expression
Code that produces a value. `2 + 2`, `name.toUpperCase()`, and `true` are all expressions.

---

## F

### Fragment
A way to group elements without adding extra HTML. Written as `<>...</>` or `<React.Fragment>`.

### Functional Component
A React component written as a function (the modern way).
```jsx
function Greeting() {
  return <h1>Hello!</h1>
}
```

---

## H

### Hook
A special function that lets you use React features (like state) in functional components. All hooks start with `use`.

### Hot Reloading / HMR (Hot Module Replacement)
When the browser updates automatically as you save files, without losing your current state.

---

## I

### Import
Bringing in code from another file or package.
```jsx
import React from 'react'
import Header from './Header'
```

### Inline Styles
CSS written directly in your JSX as a JavaScript object.
```jsx
<div style={{ color: 'red', fontSize: '20px' }}>
```

---

## J

### JavaScript (JS)
The programming language that powers interactive websites and React.

### JSON (JavaScript Object Notation)
A text format for storing data that looks like JavaScript objects.
```json
{ "name": "Alex", "age": 25 }
```

### JSX
HTML-like syntax used in React that gets converted to JavaScript.
```jsx
const element = <h1>Hello, World!</h1>
```

---

## K

### Key
A special prop used when rendering lists to help React track which items changed.
```jsx
{items.map(item => <li key={item.id}>{item.name}</li>)}
```

---

## L

### Lazy Initialization
Using a function to compute initial state (only runs once).
```jsx
const [value, setValue] = useState(() => expensiveCalculation())
```

### Library
Pre-written code you can use in your project. React is a library.

### localStorage
Browser storage that persists data even after closing the browser.
```jsx
localStorage.setItem('key', 'value')
localStorage.getItem('key')
```

### LTS (Long Term Support)
A version of software that will receive updates and bug fixes for an extended period. Use Node.js LTS for stability.

---

## M

### Map (Array Method)
Creates a new array by transforming each item. Commonly used to render lists in React.
```jsx
{items.map(item => <Item key={item.id} {...item} />)}
```

### Module
A JavaScript file that exports functionality for other files to use.

### Mount / Mounting
When a component is first created and added to the DOM.

---

## N

### Node.js
JavaScript runtime that lets you run JavaScript outside the browser. Needed for npm and development tools.

### npm (Node Package Manager)
Tool for installing and managing JavaScript packages. Comes with Node.js.

---

## O

### Object
A collection of key-value pairs in JavaScript.
```jsx
const person = { name: 'Alex', age: 25 }
```

---

## P

### Package
A bundle of code you can install and use. Also called a "dependency" or "library."

### package.json
A file listing your project's dependencies, scripts, and metadata.

### Parent Component
A component that contains other components. In `<Parent><Child /></Parent>`, Parent is the parent.

### Props (Properties)
Data passed from parent to child components.
```jsx
<Greeting name="Alex" />  // name is a prop
```

---

## R

### React
A JavaScript library for building user interfaces using components.

### Render / Re-render
When React creates or updates the visual output of a component.

### Return Statement
What a function sends back. In React components, you return JSX.

---

## S

### Setter Function
The second value from useState that updates the state.
```jsx
const [count, setCount] = useState(0)
//           ^^^^^^^^ This is the setter
```

### Side Effect
Operations that affect something outside the component (API calls, localStorage, DOM manipulation).

### Spread Operator
Three dots (`...`) that expand an array or object.
```jsx
const newArray = [...oldArray, newItem]
const newObject = { ...oldObject, newProp: value }
<Component {...props} />  // Spread props
```

### State
Data that belongs to a component and can change over time. When state changes, the component re-renders.
```jsx
const [count, setCount] = useState(0)
```

### Strict Mode
A React wrapper that helps find potential problems during development.
```jsx
<React.StrictMode>
  <App />
</React.StrictMode>
```

---

## T

### Template Literal
A string using backticks that can include variables.
```jsx
const greeting = `Hello, ${name}!`
```

### Ternary Operator
A short if/else statement: `condition ? ifTrue : ifFalse`
```jsx
{isLoggedIn ? 'Welcome!' : 'Please log in'}
```

---

## U

### Unmount / Unmounting
When a component is removed from the DOM.

### useEffect
A hook for performing side effects (data fetching, subscriptions, DOM updates).

### useState
A hook for adding state to functional components.

---

## V

### Variable
A named container for storing data.
```jsx
const name = 'Alex'
let count = 0
```

### Virtual DOM
React's lightweight copy of the real DOM. React compares changes here first, then efficiently updates only what changed in the real DOM.

### Vite
A fast build tool for modern web development. Pronounced "veet" (French for "fast").

---

## W

### Wrapper
A component that surrounds other components, often providing styling or functionality.
```jsx
<Card>
  <Content />
</Card>
```

---

## Special Symbols

### { } (Curly Braces)
In JSX, wraps JavaScript expressions.
```jsx
<p>Hello, {name}</p>
<p>Sum: {2 + 2}</p>
```

### => (Arrow)
Part of arrow function syntax.
```jsx
const add = (a, b) => a + b
```

### ... (Spread/Rest)
Spreads arrays/objects or collects remaining arguments.

### && (Logical AND)
In JSX, used for conditional rendering.
```jsx
{isVisible && <Modal />}  // Only renders if isVisible is true
```

### || (Logical OR)
Provides a fallback value.
```jsx
const name = user.name || 'Guest'  // Uses 'Guest' if name is falsy
```

### ?. (Optional Chaining)
Safely access nested properties.
```jsx
user?.address?.city  // Won't error if user or address is null/undefined
```

### ?? (Nullish Coalescing)
Provides default for null/undefined (but not for 0 or empty string).
```jsx
const count = value ?? 0  // Only uses 0 if value is null/undefined
```

---

**Can't find a term?** Ask your instructor or search the [React documentation](https://react.dev).
