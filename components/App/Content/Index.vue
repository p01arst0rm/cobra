<template>
  <div id="content-container">
    <NavSide />
    <Page />
  </div>
</template>

<script>
import NavSide from '~/components/Mixins/Nav/NavSide/Index.vue'
import Page from '~/components/App/Page/Index.vue'

export default {
  components: {
    NavSide,
    Page
  }
}
</script>

<style lang="styl">
@import 'content.styl'
</style>
