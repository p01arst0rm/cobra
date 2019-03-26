<template>
  <aside id="topnav-wrapper">
    <div id="topnav">
      <NavLinks />
    </div>
  </aside>
</template>

<script>
import config from '~/util/config'
import NavLinks from '~/components/Nav/NavLinks/Index.vue'

export default {
  name: 'NavTop',
  components: {
    NavLinks
  },
  mounted() {
    // window.addEventListener('resize', this.updateState)
  },
  methods: {
    checkState: function () {
      if (document.body.clientWidth > config.minWidthDesktop) {
        return 'closed'
      } return 'open'
    },
    updateState: function () {
      const animState = this.checkState()
      const sidebarWrapElem = document.getElementById('topnav-wrapper')
      const sidebarElem = document.getElementById('topnav')
      const target = sidebarElem.scrollHeight
      switch (animState) {
        case 'open':
          if (sidebarWrapElem.className === 'closed') {
            this.$velocity(
              sidebarWrapElem,
              {
                maxHeight: [target, 0],
                paddingTop: ['2em', '0em'],
                paddingBottom: ['2em', '0em']
              },
              {
                ease: 'ease-in-out',
                duration: 400
              })
          }
          break
        case 'closed':
          if (sidebarWrapElem.className === 'open') {
            this.$velocity(sidebarWrapElem, {
              maxHeight: [0, target],
              paddingTop: ['0em', '2em'],
              paddingBottom: ['0em', '2em']
            },
            {
              ease: 'ease-in-out',
              duration: 400
            })
          }
          break
        default:
      }
      sidebarWrapElem.className = animState
    }
  }
}
</script>

<style lang='stylus'>
@import 'navtop.styl'
</style>
