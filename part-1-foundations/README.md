# Part 1: React Foundations & Project Setup

> **Skill Level**: Beginner | **Time**: 45 minutes | **Builds On**: HTML/CSS/JS basics

---

## What You'll Learn in This Part

By the end of Part 1, you will:

- [ ] Set up a React project using **Vite** (a fast build tool)
- [ ] Understand the project file structure
- [ ] Write **JSX** - the HTML-like syntax used in React
- [ ] Create your first **React component**
- [ ] See how React differs from plain HTML/JavaScript

---

## What You'll Build

A simple React application that displays:
- A welcome header with your name
- An explanation of JSX concepts
- Your first custom component (Greeting)

**Preview**: When you finish, your browser will show an interactive page explaining React basics - and you'll understand every line of code!

---

## Before You Start

Ensure you have:
- [ ] Completed the setup in the main module README
- [ ] Node.js v18+ installed (`node --version` to check)
- [ ] VS Code or another code editor open

---

## Key Concepts Explained Simply

### 1. What is React?

**Real-world analogy**: Imagine building with LEGO blocks. Instead of creating one giant sculpture, you build small, reusable pieces (wheels, windows, doors) and combine them. React works the same way with your UI!

React is a JavaScript **library** (a collection of pre-written code) for building User Interfaces.

**Key Ideas**:
| Concept | What It Means | Why It Matters |
|---------|---------------|----------------|
| Component-Based | Build small, reusable UI pieces | Easier to maintain and test |
| Declarative | Describe WHAT you want, not HOW | Less code, fewer bugs |
| Virtual DOM | React optimizes screen updates | Your app runs faster |

### 2. Why Vite?

Vite (pronounced "veet", French for "fast") is a build tool that:
- **Starts instantly** - No waiting around
- **Hot reloads** - See changes immediately
- **Simple setup** - Just works out of the box

### 3. What is JSX?

JSX lets you write HTML-like code inside JavaScript. It looks weird at first, but it's powerful!

```jsx
// This is JSX - looks like HTML but it's JavaScript!
const element = <h1 className="title">Hello, World!</h1>;

// Behind the scenes, it becomes:
const element = React.createElement('h1', { className: 'title' }, 'Hello, World!');
```

**JSX Rules to Remember**:

| HTML Way | JSX Way | Why? |
|----------|---------|------|
| `class="..."` | `className="..."` | `class` is reserved in JavaScript |
| `<img>` | `<img />` | All tags must be closed |
| `<br>` | `<br />` | Self-closing tags need `/` |
| Plain text | `{variable}` | Curly braces for JavaScript |

---

## Project Structure Explained

Here's what each file does:

```
my-first-react-app/
|
+-- node_modules/        <-- Downloaded libraries (don't edit!)
|
+-- public/              <-- Static files (images, favicon)
|
+-- src/                 <-- YOUR CODE GOES HERE!
|   +-- assets/              Images, fonts, etc.
|   +-- components/          Your reusable components
|   |   +-- Greeting.jsx         Your first custom component!
|   +-- App.jsx              Main application component
|   +-- App.css              Styles for App
|   +-- main.jsx             Entry point - starts React
|   +-- index.css            Global styles
|
+-- index.html           <-- HTML template (has <div id="root">)
+-- package.json         <-- Project info & dependencies list
+-- vite.config.js       <-- Vite settings (usually don't touch)
```

**The Most Important Files**:
1. `main.jsx` - Where React "plugs in" to your HTML
2. `App.jsx` - Your main component (like the root of a tree)
3. `components/Greeting.jsx` - A reusable component you'll create

---

## Step-by-Step Instructions

### Step 1: Navigate to the Project

Open your terminal and run:

```bash
cd part-1-foundations/my-first-react-app
```

**Pause**: Make sure you're in the right folder! You should see `package.json` if you run `ls` (Mac/Linux) or `dir` (Windows).

---

### Step 2: Install Dependencies

```bash
npm install
```

**What Just Happened?**
- npm read `package.json` to see what libraries are needed
- It downloaded React, Vite, and other packages
- They're now in the `node_modules` folder (which is why it's so big!)

**Expected Output**: A bunch of text, ending with something like:
```
added 200+ packages in 10s
```

**If You See Errors**: Make sure you're in the correct folder and try again.

---

### Step 3: Start the Development Server

```bash
npm run dev
```

**What Just Happened?**
- Vite started a local web server on your computer
- It's watching your files for changes
- When you edit code, the browser updates automatically!

**Expected Output**:
```
  VITE v5.x.x  ready in xxx ms

  ->  Local:   http://localhost:5173/
  ->  Network: use --host to expose
```

**The server is running!** Don't close this terminal.

---

### Step 4: Open in Browser

1. Open your web browser (Chrome, Firefox, Edge, etc.)
2. Go to: `http://localhost:5173`

**Success Indicators**:
- [ ] You see a page with "My First React App" heading
- [ ] The page has colored sections explaining JSX
- [ ] You see "Hello, React Developer!" from the Greeting component

**If You See a Blank Page or Error**:
- Check the terminal for red error text
- Make sure you saved all files
- Try hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

---

### Step 5: Explore the Code

Open the project in VS Code:

```bash
code .
```

(Or open VS Code and use File -> Open Folder)

**Explore in this order**:

#### 1. Look at `src/main.jsx`
This is where React starts. It connects your React app to the HTML page.

```jsx
// This line "mounts" your React app to the HTML
ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
```

**Think of it like**: Plugging a TV (React) into a wall outlet (the HTML element with `id="root"`).

---

#### 2. Look at `src/App.jsx`
This is your main component. Notice:
- It's a JavaScript function
- It returns JSX (that HTML-looking stuff)
- It uses `{curly braces}` for JavaScript expressions

**Try This**: Find the line with `const appName = "My First React App"` and change it to your name. Save the file. Watch the browser update instantly!

---

#### 3. Look at `src/components/Greeting.jsx`
This is a custom component. Components:
- Start with a **C**apital letter (`Greeting`, not `greeting`)
- Are just JavaScript functions
- Return JSX
- Can be reused anywhere!

**Try This**: Change the `message` variable to say something different. Save and watch it update!

---

## Understanding What's Happening

### The React Data Flow

```
index.html                 main.jsx                    App.jsx
    |                         |                           |
    v                         v                           v
<div id="root">    -->    Render <App />    -->    Returns JSX
(empty box)               into that div            (your UI!)
                                                       |
                                                       v
                                              Includes <Greeting />
                                                       |
                                                       v
                                              Greeting.jsx
                                              Returns more JSX
```

### Key Insight: Components Are Just Functions

```jsx
// This component...
function Greeting() {
  return <h1>Hello!</h1>
}

// ...is used like an HTML tag!
<Greeting />
```

This is the core idea of React: **Build reusable pieces, combine them like LEGO blocks.**

---

## Expected Output

When everything works, you should see:

```
+--------------------------------------------------+
|                                                  |
|           My First React App                     |
|        Welcome to React! Today is 2024.          |
|                                                  |
+--------------------------------------------------+
|                                                  |
|  What is JSX?                                    |
|  JSX lets you write HTML-like code in JavaScript.|
|  ...                                             |
|                                                  |
+--------------------------------------------------+
|                                                  |
|  Your First Component                            |
|  +--------------------------------------------+  |
|  |  Hello, React Developer!                   |  |
|  |  This message comes from Greeting component|  |
|  +--------------------------------------------+  |
|                                                  |
+--------------------------------------------------+
```

---

## Challenges - Test Your Understanding

Try these modifications to solidify your learning:

### Challenge 1: Personalize the Greeting (Easy)

In `src/components/Greeting.jsx`:
1. Find the `message` variable
2. Change it to include your actual name
3. Save and see it update!

**Goal**: `"Hello, [Your Name]!"` appears on the page.

---

### Challenge 2: Create a Footer Component (Medium)

1. Create a new file: `src/components/Footer.jsx`
2. Add this code:

```jsx
function Footer() {
  return (
    <footer style={{ marginTop: '2rem', textAlign: 'center' }}>
      <p>Built with React in 2024</p>
    </footer>
  )
}

export default Footer
```

3. In `App.jsx`:
   - Add `import Footer from './components/Footer'` at the top
   - Add `<Footer />` just before the closing `</div>`
4. Save both files and check the browser!

**Goal**: Footer appears at the bottom of the page.

---

### Challenge 3: Use Dynamic Data (Medium)

In `App.jsx`:
1. Create a variable: `const myFavoriteLanguage = "JavaScript"`
2. Display it somewhere in the JSX using `{myFavoriteLanguage}`

**Goal**: Your favorite language appears on the page.

---

### Challenge 4: Multiple Greetings (Easy)

In `App.jsx`:
1. Find where `<Greeting />` is used
2. Add two more `<Greeting />` components below it
3. Save and watch three greetings appear!

**Goal**: Understand that components are reusable.

---

## Common Mistakes to Avoid

| Mistake | What You'll See | How to Fix |
|---------|----------------|------------|
| `<img>` without closing | Error in terminal | Use `<img />` |
| `class="..."` in JSX | Warning in console | Use `className="..."` |
| Forgot curly braces | Variable name shows as text | Use `{variableName}` |
| Multiple root elements | Error about fragments | Wrap in `<>...</>` or `<div>` |
| Component with lowercase | Renders nothing or error | Always capitalize: `Greeting` |

---

## Check Your Understanding

Before moving to Part 2, make sure you can answer:

1. **What is JSX?** HTML-like syntax that gets converted to JavaScript
2. **Why use `className` instead of `class`?** Because `class` is reserved in JavaScript
3. **What must component names start with?** A capital letter
4. **How do you display a JavaScript variable in JSX?** Wrap it in `{curly braces}`
5. **What does `npm run dev` do?** Starts the development server

---

## Summary - What You Learned

In this part, you learned:

- [x] How to set up a React project with Vite
- [x] The project file structure and what each file does
- [x] JSX syntax and its rules
- [x] How to create and use components
- [x] How components are reusable

**Congratulations!** You've built your first React application! The foundation is set.

---

## Before Moving to Part 2

Checklist:
- [ ] Your app runs without errors
- [ ] You understand that components are functions that return JSX
- [ ] You've tried at least one challenge
- [ ] You can explain what JSX is to someone else

---

## What's Next?

**Part 2: Components & Props**

In the next part, you'll learn how to:
- Break a UI into multiple components
- Pass data between components using **props**
- Build the structure of a portfolio website!

**Key Question to Think About**: In our current `Greeting` component, the message is hardcoded. What if we wanted to display different messages without creating multiple components?

**Answer**: That's what **props** are for! See you in Part 2.

---

## Part 1 Troubleshooting

### npm install fails

**Try**:
1. Delete `node_modules` folder if it exists
2. Run `npm install` again

### "React is not defined"

**Cause**: Missing import.
**Fix**: Make sure `import React from 'react'` is at the top (though Vite usually handles this).

### Browser shows old content

**Fix**:
1. Hard refresh: `Ctrl+Shift+R`
2. Check if dev server is running
3. Check terminal for errors

---

**Next Part**: [Part 2 - Components & Props](../part-2-components-props/README.md)
