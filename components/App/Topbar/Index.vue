<template>
  <span id="topbar-wrapper">
    <div class="topbar">
      <div class="title">
        <nuxt-link to="/">
          {{ title }}
        </nuxt-link>
      </div>
      <div class="sidebar-toggle">
        <NavButton />
      </div>
    </div>
  </span>
</template>

<script>
import config from '~/util/config'
import NavButton from '~/components/Nav/NavButton/Index.vue'

export default {
  name: 'Topbar',
  components: {
    NavButton
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
