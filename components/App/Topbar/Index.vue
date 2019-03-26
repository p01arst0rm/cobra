<template>
  <span id="topbar-wrapper">
    <div class="topbar">
      <div class="title">
        <nuxt-link to="/">
          {{ title }}
        </nuxt-link>
      </div>
      <div class="sidebar-toggle">
        <!--<Eburger id="sidebar-toggle" tag="Menu" />-->
      </div>
    </div>
  </span>
</template>

<script>
import config from '~/util/config'
// import Eburger from '~/components/UI/Eburger/Index.vue'

export default {
  name: 'Topbar',
  components: {
    // Eburger
  },
  data() {
    return {
      title: config.appName
    }
  }
}
</script>

<style lang="stylus">
@import "topbar.styl"
</style>
