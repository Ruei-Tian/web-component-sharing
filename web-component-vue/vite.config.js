import { fileURLToPath, URL } from 'url'
const path = require('path')
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [vue()],
  plugins: [vue({
      template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: (tag) => tag.includes('-')
        }
      }
    })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    lib: {
      entry: './src/main.ce.js',
      name: 'CustomEls',
      fileName: (format) => `CustomEls.${format}.js`
    },
    rollupOptions: {
    
    }
  }
})