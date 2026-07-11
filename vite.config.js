import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // IMPORTANT for GitHub Pages:
  // GitHub Pages serves project sites at https://<username>.github.io/<repo-name>/
  // so all asset paths need to be prefixed with "/<repo-name>/".
  // Replace "zerobite" below with your EXACT GitHub repository name
  // (case-sensitive) before deploying.
  base: '/ZeroBite/',
})
