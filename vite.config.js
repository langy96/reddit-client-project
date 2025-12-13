// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,        // exposes describe/it/test/expect globally
    environment: 'jsdom', // browser-like environment for React Testing Library
    setupFiles: ['./src/test/setup.js']
  }
});