import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// One classic-script bundle for every simulation page (simulations/<id>/index.html), so the pages work
// in a sandboxed iframe with no network access. Run by `npm run export-academy`.
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    outDir: '../simulations/common',
    emptyOutDir: true,
    copyPublicDir: false,
    chunkSizeWarningLimit: 5000,
    rollupOptions: {
      input: 'academy/sim-entry.tsx',
      output: {
        format: 'iife',
        entryFileNames: 'sim.js',
        assetFileNames: (a) => (a.names?.[0]?.endsWith('.css') ? 'sim.css' : 'fonts/[name][extname]'),
      },
    },
  },
})
