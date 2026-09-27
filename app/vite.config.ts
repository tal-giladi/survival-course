import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Relative base so the static build works on GitHub Pages under any repo path.
export default defineConfig({
  base: './',
  build: { chunkSizeWarningLimit: 1500 },
  plugins: [react()],
})
