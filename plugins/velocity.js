export default defineNuxtPlugin(async (nuxtApp) => {
  // Only import when running in the browser
  if (import.meta.client) {
    const velocity = (await import('velocity-animate/velocity.min.js')).default

    return {
      provide: {
        velocity: velocity
      }
    }
  }
})