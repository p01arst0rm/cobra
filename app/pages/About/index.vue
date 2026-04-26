<template>
  <div id="page" class="index">
    <div>
      <section class="container">
        <Logo />
        <div>
          <h1 class="title">
            {{ appName }}
          </h1>
        </div>
      </section>
    </div>
    <div>
      <h1>
        About
      </h1>
      <div class="links">
            <a
              href="https://nuxtjs.org/"
              target="_blank"
              class="button--green"
            >
              Documentation
            </a>
            <a
              href="https://github.com/nuxt/nuxt.js"
              target="_blank"
              class="button--grey"
            >
              GitHub
            </a>
          </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo/Index.vue'

export default {
  components: {
    Logo
  },
  head() {
    return {
      title: 'About'
    }
  }
}
</script>
