import { defineNuxtConfig } from 'nuxt/config'
import path from 'path'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  pages: true,
  devtools: { enabled: true },
  modules: [
    '@nuxt/test-utils',
    '@pinia/nuxt'
  ],
  plugins: [
	  { 
      src: '~/plugins/velocity.ts'
    }],
  // alias: {
  //   '~': path.resolve(process.cwd(), 'app'),
  // },
  vite: {
    css: {
      preprocessorOptions: {
        stylus: {
          // Use absolute path for reliability
          paths: [path.resolve(process.cwd(), 'app')],
          // Fix: Ensure define is an object and paths are absolute
          define: {
            '$config': path.resolve(process.cwd(), 'app/util/config.json')
          }
        }
      }
    }
  }
})
