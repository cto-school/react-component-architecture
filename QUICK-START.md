# Quick Start Guide

> **For**: Students returning after a break or those who want the TL;DR version

---

## 30-Second Setup (Per Part)

```bash
# 1. Go to the part folder
cd part-X-folder/project-name

# 2. Install dependencies (only needed once)
npm install

# 3. Start the dev server
npm run dev

# 4. Open browser to http://localhost:5173
```

---

## Which Part Am I On?

| Part | Folder | Concept |
|------|--------|---------|
| 1 | `part-1-foundations/my-first-react-app` | JSX, first component |
| 2 | `part-2-components-props/portfolio-components` | Props, multiple components |
| 3 | `part-3-state-useState/interactive-portfolio` | useState, dark mode |
| 4 | `part-4-useEffect/persistent-features` | useEffect, localStorage |
| 5 | `part-5-complete-portfolio/react-portfolio` | Everything combined |

---

## Quick Commands Reference

| What You Want | Command |
|---------------|---------|
| Start dev server | `npm run dev` |
| Stop dev server | `Ctrl + C` |
| Install packages | `npm install` |
| Build for production | `npm run build` |
| Preview production build | `npm run preview` |

---

## Quick Syntax Reference

### Component
```jsx
function MyComponent() {
  return <h1>Hello!</h1>
}
export default MyComponent
```

### Props
```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>
}
// Usage: <Greeting name="Alex" />
```

### useState
```jsx
const [count, setCount] = useState(0)
// Update: setCount(count + 1)
```

### useEffect
```jsx
// Run once on mount
useEffect(() => {
  console.log('Mounted!')
}, [])

// Run when value changes
useEffect(() => {
  console.log('Count changed:', count)
}, [count])
```

---

## Common "I'm Stuck" Fixes

| Problem | Quick Fix |
|---------|-----------|
| npm command not found | Restart terminal, or reinstall Node.js |
| Port already in use | `npm run dev -- --port 3000` |
| Module not found | Run `npm install` |
| Changes not showing | Hard refresh: `Ctrl+Shift+R` |
| Blank page | Check terminal for errors |

---

## Getting Help

1. Check the part's README for detailed instructions
2. Look at the TROUBLESHOOTING.md file
3. Google the exact error message
4. Ask your instructor

---

**Full documentation**: See main [README.md](./README.md)
