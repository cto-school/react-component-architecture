# Module 6: The React Shift - Thinking in Components

> **Skill Level**: Beginner-Friendly | **Total Time**: 5-6 hours | **Parts**: 5

---

## Welcome, Future React Developer!

You're about to embark on one of the most exciting transitions in your web development journey: moving from static HTML pages to dynamic, interactive applications with **React**.

By the end of this module, you won't just *understand* React - you'll have **built a complete portfolio website** that you can customize and show off to employers!

### Why Learn React?

- **Industry Standard**: Used by Netflix, Facebook, Airbnb, and thousands of companies
- **In-Demand Skill**: One of the most sought-after skills in job listings
- **Better Code**: Write cleaner, more maintainable code
- **Transferable**: React concepts apply to React Native (mobile), Electron (desktop), and more

---

## What You'll Build

```
Part 1: Your first React app - "Hello, React!"
    |
    v
Part 2: A portfolio broken into reusable components
    |
    v
Part 3: Interactive features (dark mode, counter)
    |
    v
Part 4: Persistent preferences (remembers your settings!)
    |
    v
Part 5: A complete, professional portfolio website
```

**Final Result**: A modern, responsive portfolio with dark mode, smooth animations, and clean code that you can deploy and share!

---

## Before You Start - Pre-Flight Checklist

Complete ALL items before beginning:

### 1. Install Node.js (Required)

- [ ] Download from [nodejs.org](https://nodejs.org/) - choose the **LTS** version
- [ ] Run the installer and accept all defaults
- [ ] **Restart your terminal/command prompt after installation**

### 2. Verify Installation

Open your terminal (Command Prompt on Windows, Terminal on Mac) and run:

```bash
node --version
```

**Expected Output**: `v18.x.x` or higher (any number starting with 18 or above)

```bash
npm --version
```

**Expected Output**: `9.x.x` or higher

### 3. If Commands Don't Work

| Problem | Solution |
|---------|----------|
| `'node' is not recognized` | Restart your terminal, or reinstall Node.js |
| Version is below v18 | Download the latest LTS from nodejs.org |
| Permission errors (Mac/Linux) | See troubleshooting section below |

### 4. Code Editor Ready

- [ ] VS Code installed ([Download here](https://code.visualstudio.com/))
- [ ] Consider installing the **ES7+ React/Redux/React-Native snippets** extension

### 5. Prior Knowledge Check

You should be comfortable with:
- [ ] HTML basics (tags, attributes, nesting)
- [ ] CSS basics (selectors, properties, classes)
- [ ] JavaScript basics (variables, functions, arrays, objects)

**Not sure?** That's okay! Part 1 reviews what you need as you go.

---

## Learning Objectives

By completing this module, you will:

| Objective | Where You'll Learn It |
|-----------|----------------------|
| Understand **JSX** - HTML-like syntax in JavaScript | Part 1 |
| Create **Components** - reusable UI building blocks | Parts 1-2 |
| Pass data with **Props** - like function arguments | Part 2 |
| Manage **State** with useState - data that changes | Part 3 |
| Handle **Side Effects** with useEffect - external interactions | Part 4 |
| Build **Custom Hooks** - reusable logic | Parts 4-5 |
| Structure a **Professional React Project** | Part 5 |

---

## Your Learning Path

```
START HERE
    |
    v
+-------------------+     +---------------------+     +-------------------+
|    PART 1         |     |      PART 2         |     |     PART 3        |
|   Foundations     | --> |  Components & Props | --> |  State (useState) |
|   45 minutes      |     |     60 minutes      |     |    60 minutes     |
|                   |     |                     |     |                   |
| - Setup project   |     | - Break UI into     |     | - Interactive     |
| - Learn JSX       |     |   components        |     |   features        |
| - First component |     | - Pass data around  |     | - Dark mode       |
+-------------------+     +---------------------+     +-------------------+
                                                              |
                                                              v
                          +---------------------+     +-------------------+
                          |      PART 5         |     |     PART 4        |
                          |  Complete Portfolio | <-- |  Effects (useEffect)|
                          |     90 minutes      |     |    45 minutes     |
                          |                     |     |                   |
                          | - Everything        |     | - Save preferences|
                          |   together!         |     | - localStorage    |
                          | - Deploy-ready      |     | - Custom hooks    |
                          +---------------------+     +-------------------+
                                  |
                                  v
                            YOU DID IT!
                        Portfolio Complete!
```

---

## Module Structure

```
module-6-react-fundamentals/
|
+-- README.md                    <-- You are here!
+-- QUICK-START.md               <-- TL;DR version for returning students
+-- TROUBLESHOOTING.md           <-- When things go wrong
+-- GLOSSARY.md                  <-- Technical terms explained
|
+-- part-1-foundations/          <-- Start here!
|   +-- README.md                    Instructions for Part 1
|   +-- my-first-react-app/          Your first React project
|
+-- part-2-components-props/
|   +-- README.md
|   +-- portfolio-components/        Breaking UI into pieces
|
+-- part-3-state-useState/
|   +-- README.md
|   +-- interactive-portfolio/       Making things interactive
|
+-- part-4-useEffect/
|   +-- README.md
|   +-- persistent-features/         Saving preferences
|
+-- part-5-complete-portfolio/
    +-- README.md
    +-- react-portfolio/             Your final, complete portfolio!
```

---

## How to Work Through This Module

### Step 1: Start with Part 1

Each part builds on the previous. **Don't skip ahead!**

```bash
cd part-1-foundations/my-first-react-app
```

### Step 2: Install Dependencies

Every project needs its packages installed first:

```bash
npm install
```

**What's happening?** This downloads all the code libraries your project needs. You'll see a `node_modules` folder appear - that's where they live!

### Step 3: Start the Development Server

```bash
npm run dev
```

**Expected Output:**
```
  VITE v5.x.x  ready in xxx ms

  ->  Local:   http://localhost:5173/
  ->  Network: use --host to expose
```

### Step 4: Open in Browser

- Open your web browser
- Go to `http://localhost:5173` (or whatever URL is shown in your terminal)
- You should see your React app running!

**Success Indicator**: You see content on the page, not a blank screen or error.

### Step 5: Read the Code

Open the project in VS Code and explore. Look for:
- `// TODO:` comments - These are your cues to experiment!
- `/* CHALLENGES */` sections - Optional exercises to try
- Extensive comments explaining each concept

### Step 6: Complete the Challenges

Each part has challenges. They're optional but highly recommended!

---

## Quick Reference Card

### Creating a New React Project (for future reference)

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
```

### Common Commands

| Command | What It Does |
|---------|--------------|
| `npm install` | Downloads project dependencies |
| `npm run dev` | Starts development server (auto-reloads!) |
| `npm run build` | Creates production-ready files |
| `npm run preview` | Preview the production build |
| `Ctrl+C` | Stops the running server |

### React Basics Cheatsheet

```jsx
// JSX - Write HTML-like code in JavaScript
const element = <h1>Hello, React!</h1>;

// Components - Reusable UI pieces (always start with capital letter!)
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// useState - Data that can change
const [count, setCount] = useState(0);

// useEffect - Side effects (runs after render)
useEffect(() => {
  document.title = `Count: ${count}`;
}, [count]);
```

---

## Troubleshooting - Common Issues

### "npm: command not found"

**Cause**: Node.js isn't installed or isn't in your system PATH.

**Fix**:
1. Download Node.js from [nodejs.org](https://nodejs.org/)
2. Install it (accept all defaults)
3. **Close and reopen your terminal**
4. Try again

### "Port 5173 is already in use"

**Cause**: Another dev server is running somewhere.

**Fix Options**:
1. Find the other terminal and press `Ctrl+C` to stop it
2. Use a different port: `npm run dev -- --port 3000`

### "Module not found" errors

**Cause**: Dependencies aren't installed.

**Fix**: Run `npm install` in the project folder.

### Changes not showing in browser

**Fix Steps**:
1. Check terminal for errors (red text)
2. Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
3. Make sure `npm run dev` is still running

### Can't run any commands

**Cause**: You might be in the wrong folder.

**Fix**: Use `pwd` (Mac/Linux) or `cd` (Windows) to check your location. Navigate to the correct project folder.

### Still stuck?

1. Read the error message carefully - it often tells you what's wrong
2. Check the part's specific README for troubleshooting
3. Google the exact error message
4. Ask your instructor or classmates

---

## After Completing This Module

### Submit Your Work (LMS)

**Caption**: "Migrated from static HTML to React Components! Learning to think in terms of state and props. #ReactJS #ModernFrontend"

**Required Screenshots**:
1. VS Code showing your `src/components` folder structure
2. One component file open (e.g., `Header.jsx`)

### What You've Accomplished

- [ ] Created your first React application
- [ ] Built reusable components
- [ ] Passed data between components with props
- [ ] Added interactivity with useState
- [ ] Persisted data with useEffect and localStorage
- [ ] Structured a professional React project
- [ ] Built a complete portfolio website!

### What's Next?

Ready for more? Here are natural next steps:

| Topic | What It Enables |
|-------|-----------------|
| **React Router** | Multiple pages/views in your app |
| **Context API** | Share data without prop drilling |
| **API Integration** | Fetch data from servers |
| **Component Libraries** | Material UI, Chakra UI for pre-built components |
| **Deployment** | Put your portfolio live on Vercel or Netlify |

---

## Additional Resources

### Official Documentation
- [React Official Docs](https://react.dev/) - The best resource for React
- [Vite Documentation](https://vitejs.dev/) - Your build tool

### Helpful Tools
- [React Developer Tools](https://react.dev/learn/react-developer-tools) - Browser extension for debugging

### Further Learning
- [JavaScript ES6+ Features](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Strengthen your JS
- [CSS Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - For layout

---

## A Note on Learning

Learning React can feel overwhelming at first. That's completely normal! Here's what to remember:

1. **It's okay to feel confused** - New concepts take time to sink in
2. **Type the code yourself** - Don't just read it, write it
3. **Break things on purpose** - See what errors you get, then fix them
4. **Take breaks** - Your brain processes information while resting
5. **Celebrate small wins** - Got a component to render? That's huge!

Every React expert was once exactly where you are now. You've got this!

---

**Happy Coding!** Remember: The best way to learn React is to build things. Let's go!

