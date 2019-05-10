<template>
  <div id="page" class="index">
    <div>
      <logo />
      <section class="container">
        <div>
          <h1 class="title">
            {{ appName }}
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
      </section>
    </div>
    <div>
      <p>
        i am another element!!
      </p>
    </div>
  </div>
</template>

<script>
import config from '~/util/config'
import Logo from '~/components/Mixins/Logo/Index.vue'

export default {
  components: {
    Logo
  },
  head() {
    return {
      title: 'Home'
    }
  },
  data() {
    return {
      appName: config.appName
    }
  }
}
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.container .title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  color: #35495e;
  letter-spacing: 1px;
}

.container .title {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
