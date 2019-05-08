<template>
  <div id="header">
    <Topbar />
    <NavTop />
  </div>
</template>

<script>
import Topbar from '~/components/Mixins/Topbar/Index.vue'
import NavTop from '~/components/Mixins/Nav/NavTop/Index.vue'

export default {
  components: {
    Topbar,
    NavTop
  }
}
</script>
