<template>
  <div id="app" class="full">
    <Header />
    <Content />
    <Footer />
  </div>
</template>

<script>
  import { getMode } from '~/util/proc/ui'
  import { useNavStore } from '~/stores/nav'
  import Header from '~/components/Header/Index.vue'
  import Content from '~/components/Content/Index.vue'
  import Footer from '~/components/Footer/Index.vue'

export default {
  components: {
    Header,
    Content,
    Footer
  },
  setup() {
    const navStore = useNavStore()
    return { navStore }
  },
  mounted() {
    this.navStore.init()
    window.addEventListener('resize', this.resize)
  },
  methods: {
    resize: function () {
      const navMode = getMode()
        if (this.navStore.mode !== navMode) {
        this.navStore.resize(navMode)
      }
    }
  }
}
</script>

<style lang="stylus">
  @import 'assets/styles/default/layout.styl'
</style>
