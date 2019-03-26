<template>
  <div class="container">
    <h1
      v-if="error.statusCode === 404"
    >
      <Err404 />
    </h1>
    <h1
      v-else
    >
      An error occurred!
    </h1>
    <nuxt-link
      to="/"
    >
      Home page
    </nuxt-link>
  </div>
</template>

<script>
import Err404 from '~/components/Error/Err404.vue'

export default {
  components: {
    Err404
  },
  props: {
    error: {
      type: null,
      required: true
    }
  },
  layout: 'default'
}
</script>
