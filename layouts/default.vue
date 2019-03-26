<template>
  <div id="app" class="full">
    <Topbar />
    <NavTop />
    <Content />
  </div>
</template>

<script>
import Topbar from '~/components/App/Topbar/Index.vue'
import NavTop from '~/components/Nav/NavTop/Index.vue'
import Content from '~/components/App/Content/Index.vue'

export default {
  components: {
    Topbar,
    NavTop,
    Content
  }
}
</script>

<style lang="styl">
@import '~@/assets/styles/default.styl'
</style>
