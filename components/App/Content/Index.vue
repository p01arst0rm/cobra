<template>
  <div id="content-container">
    <NavSide />
    <div id="page-container">
      <nuxt />
    </div>
  </div>
</template>

<script>
import NavSide from '~/components/Nav/NavSide/Index.vue'

export default {
  components: {
    NavSide
  }
}
</script>

<style lang="styl">
@import 'content.styl'
</style>
