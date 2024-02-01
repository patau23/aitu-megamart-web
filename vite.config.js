import { fileURLToPath, URL } from 'node:url'

import { defineConfig, } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  server: {
    // '/api': {
    //   target: 'http://adbfinal.azurewebsites.net',
    //   changeOrigin: true,
    //   // rewrite: (path) => path.replace(/^\/api/, ''),
    // },
    host: '0.0.0.0',
    port: 2077,
    proxy: {
      '/api': {
        target: 'https://adbfinal.azurewebsites.net',
        changeOrigin: true,
        secure: false
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/swagger': `http://adbfinal.azurewebsites.net/api`,
    },
  }
})
