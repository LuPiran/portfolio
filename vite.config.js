import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// O GitHub Pages serve o site em /portfolio/. No `npm run dev` a raiz continua /.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/portfolio/' : '/',
}))
