import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// Vite configuration for React projects
export default defineConfig({
  plugins: [react()],

  // Development server options
  server: {
    port: 5173,        // Default port
    open: true,        // Auto-open browser on start
  },
})
