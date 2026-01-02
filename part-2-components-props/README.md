# Part 2: Components & Props

> **Skill Level**: Beginner | **Time**: 60 minutes | **Builds On**: Part 1

---

## What You'll Learn in This Part

By the end of Part 2, you will:

- [ ] Break a UI into multiple **components**
- [ ] Pass data to components using **props** (properties)
- [ ] Create **reusable** components for portfolio items
- [ ] Understand **component composition** (components inside components)
- [ ] Build a static portfolio layout with React

---

## What You'll Build

A portfolio website broken into reusable pieces:

```
+--------------------------------------------------+
|  Header Component                                |
|  [Your Name] | [Your Title]                      |
|  [About] [Experience] [Projects] [Contact]       |
+--------------------------------------------------+
|                                                  |
|  About Component                                 |
|  "Hi, I'm a developer who..."                    |
|                                                  |
+--------------------------------------------------+
|                                                  |
|  Experience Component                            |
|  +-------------+  +-------------+                |
|  |ExperienceItem|  |ExperienceItem|              |
|  | Job 1       |  | Job 2       |                |
|  +-------------+  +-------------+                |
|                                                  |
+--------------------------------------------------+
|                                                  |
|  Projects Component                              |
|  +-------------+  +-------------+                |
|  |ProjectCard  |  |ProjectCard  |                |
|  | Project 1   |  | Project 2   |                |
|  +-------------+  +-------------+                |
|                                                  |
+--------------------------------------------------+
|  Footer Component                                |
+--------------------------------------------------+
```

---

## Key Concepts Explained Simply

### 1. Components: Building Blocks of React

**Real-world analogy**: Think of components like LEGO blocks:
- Each piece is small and focused on one job
- They can be combined to build complex structures
- They can be reused across your application

```jsx
// A portfolio might have these components:
<App>
  <Header />       {/* Shows name and navigation */}
  <About />        {/* Shows bio */}
  <Experience />   {/* Shows work history */}
  <Projects />     {/* Shows portfolio projects */}
  <Footer />       {/* Shows copyright and links */}
</App>
```

**Why break things into components?**
- **Easier to understand**: Each piece has one job
- **Easier to maintain**: Fix bugs in one place
- **Reusable**: Use the same component multiple times

---

### 2. Props: Passing Data to Components

**Real-world analogy**: Props are like giving instructions to a worker. You tell them what to do with the materials you provide.

```jsx
// YOU (the parent) give instructions:
<Greeting name="Sarah" role="Developer" />

// GREETING (the child) uses those instructions:
function Greeting({ name, role }) {
  return <h1>Hello, {name}! You're a {role}.</h1>
}
// Result: "Hello, Sarah! You're a Developer."
```

**Key Facts About Props**:

| Fact | What It Means |
|------|---------------|
| **Read-only** | Components cannot modify their props |
| **Passed down** | Data flows from parent to child |
| **Any type** | Can be strings, numbers, arrays, objects, functions |

---

### 3. Destructuring Props

Two ways to access props:

```jsx
// Method 1: Access via props object
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>
}

// Method 2: Destructure in parameter (CLEANER!)
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>
}

// Both produce the same result!
```

**Why destructure?** It's cleaner and makes it obvious what data the component needs.

---

### 4. The Special `children` Prop

Whatever you put between opening and closing tags becomes `children`:

```jsx
// Using the component:
<Card>
  <h2>Title</h2>
  <p>Content goes here</p>
</Card>

// Inside Card component:
function Card({ children }) {
  return <div className="card">{children}</div>
}
```

**Think of it like**: A box that can hold anything you put inside it.

---

## Project Structure

```
portfolio-components/
|
+-- src/
|   +-- components/
|   |   +-- Header.jsx          <-- Site header (name, title, nav)
|   |   +-- Header.css
|   |   +-- About.jsx           <-- About me section
|   |   +-- About.css
|   |   +-- ExperienceItem.jsx  <-- Single experience entry (REUSABLE!)
|   |   +-- ExperienceItem.css
|   |   +-- Experience.jsx      <-- Container for all experiences
|   |   +-- Experience.css
|   |   +-- ProjectCard.jsx     <-- Single project card (REUSABLE!)
|   |   +-- ProjectCard.css
|   |   +-- Projects.jsx        <-- Container for all projects
|   |   +-- Projects.css
|   |   +-- Footer.jsx          <-- Site footer
|   |   +-- Footer.css
|   |
|   +-- data/
|   |   +-- portfolioData.js    <-- All content lives here!
|   |
|   +-- App.jsx                 <-- Puts it all together
|   +-- App.css
|   +-- main.jsx
|
+-- ...
```

---

## Step-by-Step Instructions

### Step 1: Navigate to the Project

```bash
cd part-2-components-props/portfolio-components
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Start the Development Server

```bash
npm run dev
```

### Step 4: Open in Browser

Go to `http://localhost:5173`

**Success Indicators**:
- [ ] You see a complete portfolio page
- [ ] Header shows a name and navigation
- [ ] Multiple experience items display
- [ ] Multiple project cards display

---

## Understanding the Data Flow

This diagram shows how data moves through the app:

```
                    portfolioData.js
                    (All your content)
                           |
                           v
                       App.jsx
                    (Imports data)
                           |
        +--------+---------+---------+---------+
        |        |         |         |         |
        v        v         v         v         v
    Header    About   Experience  Projects   Footer
   (name,    (desc)   (experiences) (projects) (name,
    title)              array         array    social)
                          |            |
                    +-----+      +-----+
                    |            |
                    v            v
              ExperienceItem  ProjectCard
              (single item)   (single item)
              REPEATED FOR    REPEATED FOR
              EACH EXPERIENCE EACH PROJECT
```

**Key Insight**: Data flows DOWN from parent to child. Each component only gets what it needs.

---

## Explore the Code

### 1. The Data File (`src/data/portfolioData.js`)

Open this file first! All the content lives here, separate from the components.

**Why separate data?**
- Easy to update content without touching code
- Could later fetch from an API
- Clean separation of concerns

**Try This**: Change your name in the data file. Save and watch the whole site update!

---

### 2. The App Component (`src/App.jsx`)

This component:
1. Imports the data
2. Passes pieces to child components

```jsx
// Importing data
import { portfolioData } from './data/portfolioData'

// Passing data as props
<Header name={name} title={title} />
<About description={about} />
<Experience experiences={experiences} />
```

---

### 3. A Simple Component (`src/components/Header.jsx`)

```jsx
function Header({ name, title }) {
  return (
    <header>
      <h1>{name}</h1>
      <p>{title}</p>
    </header>
  )
}
```

**Notice**:
- Props are destructured in the parameter `{ name, title }`
- Values are used with `{curly braces}` in JSX

---

### 4. A Component That Maps Data (`src/components/Experience.jsx`)

This is where it gets interesting! We take an array and create a component for each item:

```jsx
function Experience({ experiences }) {
  return (
    <section>
      {experiences.map((exp) => (
        <ExperienceItem
          key={exp.id}           // Required! Helps React track items
          title={exp.title}
          company={exp.company}
          // ...other props
        />
      ))}
    </section>
  )
}
```

**What's `.map()` doing?**
1. Goes through each item in the array
2. Returns a component for each one
3. React renders all of them

**Think of it like**: A factory that produces one card for each item in a list.

---

### 5. A Reusable Item Component (`src/components/ExperienceItem.jsx`)

```jsx
function ExperienceItem({ title, company, period, description }) {
  return (
    <div className="experience-item">
      <h3>{title}</h3>
      <p>{company} | {period}</p>
      <p>{description}</p>
    </div>
  )
}
```

**This component doesn't know or care**:
- How many times it's used
- What data it gets
- Where the data comes from

It just knows: "Give me a title, company, period, and description, and I'll display them nicely."

---

## Common Patterns

### Pattern 1: Mapping Arrays to Components

```jsx
{projects.map((project) => (
  <ProjectCard
    key={project.id}  // ALWAYS include a unique key!
    title={project.title}
    description={project.description}
  />
))}
```

**Why do we need `key`?** It helps React efficiently update the list. Without it, React can't tell which items changed.

---

### Pattern 2: Spreading Props

Instead of passing each prop individually:

```jsx
// Verbose way
<ProjectCard
  title={project.title}
  description={project.description}
  image={project.image}
/>

// Spread operator way (shorter!)
<ProjectCard {...project} />
```

The spread operator `{...project}` passes all properties of the object as props.

---

### Pattern 3: Default Props

What if a prop isn't provided? Set a default!

```jsx
function Button({ text = "Click me", color = "blue" }) {
  return <button style={{ backgroundColor: color }}>{text}</button>
}

// Usage:
<Button />                    // Uses defaults: "Click me", blue
<Button text="Submit" />      // "Submit", blue
<Button color="green" />      // "Click me", green
```

---

## Expected Output

Your portfolio should look something like:

```
+--------------------------------------------------+
|                                                  |
|              Alex Johnson                        |
|          Full Stack Developer                    |
|     [About] [Experience] [Projects] [Contact]    |
|                                                  |
+--------------------------------------------------+
|                                                  |
|  ABOUT ME                                        |
|  "Passionate developer with 5 years..."          |
|                                                  |
+--------------------------------------------------+
|                                                  |
|  EXPERIENCE                                      |
|                                                  |
|  +--------------------+  +--------------------+  |
|  | Senior Developer   |  | Developer          |  |
|  | TechCorp           |  | StartupXYZ         |  |
|  | 2022 - Present     |  | 2020 - 2022        |  |
|  +--------------------+  +--------------------+  |
|                                                  |
+--------------------------------------------------+
|                                                  |
|  PROJECTS                                        |
|                                                  |
|  +--------------------+  +--------------------+  |
|  | [Image]            |  | [Image]            |  |
|  | E-Commerce App     |  | Weather Dashboard  |  |
|  | Built with React   |  | Built with Vue     |  |
|  +--------------------+  +--------------------+  |
|                                                  |
+--------------------------------------------------+
|                                                  |
|          (c) 2024 Alex Johnson                   |
|                                                  |
+--------------------------------------------------+
```

---

## Challenges

### Challenge 1: Add a New Experience (Easy)

In `src/data/portfolioData.js`:
1. Find the `experiences` array
2. Add a new experience object
3. Save and watch it appear automatically!

```js
{
  id: 3,
  title: "Junior Developer",
  company: "MyFirstJob Inc",
  period: "2019 - 2020",
  description: "Started my coding journey here"
}
```

---

### Challenge 2: Create a Skills Component (Medium)

1. Create `src/components/Skills.jsx`
2. It should receive a `skills` array as a prop
3. Display each skill as a badge/tag
4. Import and use it in `App.jsx`

**Starter Code**:
```jsx
function Skills({ skills }) {
  return (
    <section>
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <span key={index} className="skill-badge">
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Skills
```

---

### Challenge 3: Conditional Rendering (Medium)

In `ExperienceItem.jsx`, show "Present" if there's no end date:

```jsx
// If endDate exists, show it. Otherwise, show "Present"
<span>{endDate ? endDate : 'Present'}</span>

// Or shorter:
<span>{endDate || 'Present'}</span>
```

---

### Challenge 4: Add Links to ProjectCard (Medium)

Extend `ProjectCard.jsx` to show "Live Demo" and "GitHub" links:

```jsx
{liveUrl && (
  <a href={liveUrl} target="_blank" rel="noopener noreferrer">
    Live Demo
  </a>
)}
```

**Note**: The `&&` means "if liveUrl exists, render this link"

---

## Common Mistakes to Avoid

| Mistake | What Happens | How to Fix |
|---------|--------------|------------|
| Forgetting `key` in maps | Warning in console | Add `key={item.id}` |
| Modifying props | Error/unexpected behavior | Props are read-only! |
| Wrong prop name | Data doesn't show | Check spelling matches |
| Forgetting to export | "Module not found" error | Add `export default ComponentName` |

---

## Check Your Understanding

Before moving to Part 3, make sure you can answer:

1. **What are props?** Data passed from parent to child components
2. **Why destructure props?** Cleaner code, clear about what data is needed
3. **What does `.map()` do with components?** Creates one component per array item
4. **Why do we need `key` in lists?** Helps React track which items changed
5. **Why separate data from components?** Easier to maintain and update

---

## Summary

In this part, you learned:

- [x] How to break a UI into components
- [x] How to pass data with props
- [x] How to create reusable components
- [x] Component composition patterns
- [x] Mapping arrays to create multiple components

---

## Before Moving to Part 3

Checklist:
- [ ] Your portfolio displays correctly
- [ ] You understand how data flows from App to child components
- [ ] You've tried adding new data and seen it appear
- [ ] You understand what props are

---

## What's Next?

**Part 3: State Management with useState**

In the next part, you'll learn:
- How to make your portfolio **interactive**
- Managing data that **changes** over time
- Building a **dark mode toggle**
- Creating a **counter** component

**Key Question to Think About**: Right now, your portfolio is static - it displays data but doesn't change. What if you want a button that switches between light and dark mode? The page would need to "remember" which mode it's in...

**Answer**: That's what **state** is for! See you in Part 3.

---

## Part 2 Troubleshooting

### Component doesn't show up

**Check**:
1. Did you export it? `export default ComponentName`
2. Did you import it in App.jsx?
3. Did you actually use it in the JSX? `<ComponentName />`

### Props are undefined

**Check**:
1. Are you passing the prop? `<Header name={name} />`
2. Is the prop name spelled correctly on both sides?
3. Does the data exist in portfolioData.js?

### Map is not a function

**Cause**: The data isn't an array.
**Fix**: Check that you're passing an array, not a single object.

---

**Previous**: [Part 1 - Foundations](../part-1-foundations/README.md)

**Next**: [Part 3 - State & useState](../part-3-state-useState/README.md)
