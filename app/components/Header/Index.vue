<template>
  <div id="header">
    <TopBar />
    <NavTop />
  </div>
</template>

<script>
import TopBar from '~/components/UI/TopBar/Index.vue'
import NavTop from '~/components/UI/Nav/NavTop/Index.vue'

export default {
  components: {
    TopBar,
    NavTop
  }
}
</script>
