import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Build the app located in /client and output to /dist at repo root
export default defineConfig({
  root: 'client',
  publicDir: 'public',
  plugins: [react()],
  build: {
    outDir: '../dist',       // put final files at /dist (repo root)
    emptyOutDir: true
  },
})
