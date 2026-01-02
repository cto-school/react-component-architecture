/**
 * portfolioData.js - Centralized Portfolio Content
 *
 * UPDATE THIS FILE WITH YOUR OWN INFORMATION!
 *
 * This separation of data from components makes it easy to:
 * 1. Update content without touching component code
 * 2. Potentially fetch from an API in the future
 * 3. Maintain and scale the portfolio
 */

export const portfolioData = {
  // ========================================
  // PERSONAL INFO
  // ========================================
  personal: {
    name: "Alex Johnson",
    title: "Full Stack Developer",
    tagline: "Building beautiful, functional web experiences",
    email: "alex@example.com",
    location: "San Francisco, CA",
    resumeUrl: "/resume.pdf", // Add your resume to public folder
    avatar: "https://via.placeholder.com/200", // Replace with your image
  },

  // ========================================
  // ABOUT SECTION
  // ========================================
  about: {
    description: `I'm a passionate full-stack developer with 4+ years of experience
    building web applications. I specialize in React, Node.js, and modern JavaScript,
    with a focus on creating intuitive user interfaces and scalable backend systems.

    When I'm not coding, you'll find me exploring new technologies, contributing
    to open source projects, or enjoying a good cup of coffee while reading about
    the latest in tech.`,

    highlights: [
      "4+ years of professional experience",
      "10+ production applications built",
      "Open source contributor",
      "Tech community speaker"
    ]
  },

  // ========================================
  // SKILLS
  // ========================================
  skills: {
    frontend: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
    backend: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"],
    tools: ["Git", "Docker", "AWS", "Figma", "VS Code"],
    soft: ["Problem Solving", "Team Collaboration", "Communication", "Agile/Scrum"]
  },

  // ========================================
  // EXPERIENCE
  // ========================================
  experiences: [
    {
      id: 1,
      role: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      type: "Full-time",
      startDate: "Jan 2023",
      endDate: null,
      description: "Leading frontend development for the main product. Implemented design system that improved development speed by 40%.",
      achievements: [
        "Led migration from class components to hooks",
        "Reduced bundle size by 35%",
        "Mentored 3 junior developers"
      ],
      technologies: ["React", "TypeScript", "GraphQL", "Tailwind CSS"]
    },
    {
      id: 2,
      role: "Frontend Developer",
      company: "StartupXYZ",
      location: "Remote",
      type: "Full-time",
      startDate: "Jun 2021",
      endDate: "Dec 2022",
      description: "Built and maintained multiple client-facing features for a SaaS platform serving 50K+ users.",
      achievements: [
        "Implemented real-time collaboration features",
        "Improved page load time by 50%",
        "Built accessible component library"
      ],
      technologies: ["React", "Redux", "Node.js", "PostgreSQL"]
    },
    {
      id: 3,
      role: "Junior Web Developer",
      company: "Digital Agency",
      location: "New York, NY",
      type: "Full-time",
      startDate: "Jan 2020",
      endDate: "May 2021",
      description: "Developed responsive websites for various clients across different industries.",
      achievements: [
        "Delivered 15+ client projects",
        "Learned React and modern JS",
        "Improved SEO scores by 30%"
      ],
      technologies: ["JavaScript", "HTML", "CSS", "WordPress"]
    }
  ],

  // ========================================
  // PROJECTS
  // ========================================
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online store with product management, cart functionality, secure payments, and admin dashboard.",
      longDescription: "Built a scalable e-commerce solution handling 10K+ products with real-time inventory management.",
      image: "https://via.placeholder.com/600x400/2563eb/ffffff?text=E-Commerce",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Productivity app with drag-and-drop, team collaboration, and real-time sync across devices.",
      longDescription: "Collaborative task management with real-time updates using WebSockets.",
      image: "https://via.placeholder.com/600x400/0ea5e9/ffffff?text=Task+Manager",
      technologies: ["React", "Firebase", "Material-UI", "WebSockets"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Beautiful weather app with 7-day forecasts, location search, and weather alerts.",
      longDescription: "Weather visualization with charts and maps integration.",
      image: "https://via.placeholder.com/600x400/22c55e/ffffff?text=Weather+App",
      technologies: ["React", "OpenWeather API", "Chart.js", "Leaflet"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "This portfolio site! Built with React to showcase my work and skills.",
      longDescription: "Modern portfolio with dark mode, animations, and responsive design.",
      image: "https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Portfolio",
      technologies: ["React", "CSS3", "Vite"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false
    }
  ],

  // ========================================
  // SOCIAL LINKS
  // ========================================
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "alex@example.com"
  },

  // ========================================
  // NAVIGATION
  // ========================================
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ]
}

/*
 * TODO: Replace all placeholder data with your own!
 *
 * 1. Update personal info with your name, title, and links
 * 2. Write your own about description
 * 3. Add your real work experience
 * 4. Showcase your actual projects with real screenshots
 * 5. Update social links to your profiles
 */
