<template>
  <span id="topbar-wrapper">
    <div class="topbar">
      <div class="title">
        <nuxt-link to="/">
          {{ appName }}
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
import NavButton from '~/components/App/Nav/NavButton/Index.vue'

export default {
  name: 'Topbar',
  components: {
    NavButton
  },
  data() {
    return {
      appName: config.appName
    }
  }
}
</script>

<style lang="stylus">
@import "topbar.styl"
</style>
