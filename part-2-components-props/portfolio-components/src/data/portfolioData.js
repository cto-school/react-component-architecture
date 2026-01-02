/**
 * portfolioData.js - Centralized Portfolio Data
 *
 * WHY SEPARATE DATA FROM COMPONENTS?
 * ----------------------------------
 * 1. Easier to update content without touching component code
 * 2. Data can come from an API in a real app
 * 3. Components stay focused on presentation
 * 4. Makes testing easier
 *
 * In a real application, this data might come from:
 * - A CMS (Content Management System)
 * - A database
 * - An API endpoint
 * - A JSON file
 */

export const portfolioData = {
  // Basic Info
  name: "Alex Johnson",
  title: "Full Stack Developer",

  // About Section
  about: `I'm a passionate developer with 3+ years of experience building
    web applications. I love creating intuitive user interfaces and
    solving complex problems. When I'm not coding, you can find me
    exploring new technologies, contributing to open source, or
    enjoying a good cup of coffee.`,

  // Experience Section
  // Each object in this array will become an ExperienceItem component
  experiences: [
    {
      id: 1,
      role: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      startDate: "Jan 2023",
      endDate: null, // null means "Present"
      description: "Leading the frontend team in building scalable React applications. Implemented design systems and improved performance by 40%.",
      technologies: ["React", "TypeScript", "GraphQL", "Tailwind CSS"]
    },
    {
      id: 2,
      role: "Frontend Developer",
      company: "StartupXYZ",
      location: "Remote",
      startDate: "Jun 2021",
      endDate: "Dec 2022",
      description: "Built and maintained multiple client-facing features. Collaborated with designers to create responsive, accessible interfaces.",
      technologies: ["React", "JavaScript", "Redux", "SCSS"]
    },
    {
      id: 3,
      role: "Junior Web Developer",
      company: "Digital Agency Co.",
      location: "New York, NY",
      startDate: "Jan 2020",
      endDate: "May 2021",
      description: "Developed websites for various clients. Learned modern JavaScript frameworks and best practices for web development.",
      technologies: ["HTML", "CSS", "JavaScript", "WordPress"]
    }
  ],

  // Projects Section
  // Each object will become a ProjectCard component
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online store with cart functionality, payment integration, and admin dashboard.",
      image: "https://via.placeholder.com/400x250/2563eb/ffffff?text=E-Commerce",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity app with drag-and-drop interface, team collaboration, and real-time updates.",
      image: "https://via.placeholder.com/400x250/0ea5e9/ffffff?text=Task+App",
      technologies: ["React", "Firebase", "Material-UI"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather information with beautiful visualizations and 7-day forecasts.",
      image: "https://via.placeholder.com/400x250/10b981/ffffff?text=Weather",
      technologies: ["React", "OpenWeather API", "Chart.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    }
  ],

  // Social Links
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "alex@example.com"
  }
}

/*
 * TODO: Customize this data!
 *
 * 1. Replace the name and title with your own
 * 2. Write your own about description
 * 3. Add your real experience entries
 * 4. Add your actual projects
 * 5. Update social links
 *
 * Remember: The components will automatically reflect any changes you make here!
 */
