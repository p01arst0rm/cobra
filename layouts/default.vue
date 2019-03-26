<template>
  <div id="app" class="full">
    <Topbar />
    <NavTop />
    <Content />
  </div>
</template>

<script>
import { getMode } from '~/util/proc/ui'
import Topbar from '~/components/App/Topbar/Index.vue'
import NavTop from '~/components/Nav/NavTop/Index.vue'
import Content from '~/components/App/Content/Index.vue'

export default {
  components: {
    Topbar,
    NavTop,
    Content
  },
  mounted() {
    this.$store.commit('init')
    window.addEventListener('resize', this.resize)
  },
  methods: {
    resize: function (value) {
      const mode = getMode()
      if (this.$store.state.mode !== mode) {
        this.$store.commit('resize', mode)
      }
    }
  }
}
</script>

<style lang="styl">
@import '~@/assets/styles/default.styl'
</style>
