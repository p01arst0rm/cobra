<template>
  <div id="header">
    <Topbar />
    <NavTop />
  </div>
</template>

<script>
import Topbar from '~/components/Applets/Topbar/Index.vue'
import NavTop from '~/components/Applets/Nav/NavTop/Index.vue'

export default {
  components: {
    Topbar,
    NavTop
  }
}
</script>

<style lang="styl">
@import '~@/assets/styles/default.styl'
</style>
