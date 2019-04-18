<template>
  <div id="app" class="full">
    <Header />
    <Content />
  </div>
</template>

<script>
import { getMode } from '~/util/proc/ui'
import Header from '~/components/App/Header/Index.vue'
import Content from '~/components/App/Content/Index.vue'

export default {
  components: {
    Header,
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
