<template>
  <div id="navside-container">
    <div id="navside-wrapper">
      <div id="navside">
        <NavLinks />
      </div>
    </div>
  </div>
</template>

<script>
import config from '~/util/config'
import NavLinks from '~/components/Nav/NavLinks/Index.vue'

export default {
  name: 'NavSide',
  components: {
    NavLinks
  },
  mounted() {
    this.initView()
    window.addEventListener('resize', this.updateState)
  },
  methods: {
    getViewState: function () {
      if (document.body.clientWidth > config.minWidthDesktop) {
        return 'full'
      } else {
        return 'mini'
      }
    },
    updateState: function () {
      const animState = this.getViewState()
      const sidebarWrapElem = document.getElementById('navside-wrapper')
      const sidebarElem = document.getElementById('navside')
      const target = sidebarElem.scrollWidth
      if (sidebarWrapElem.className !== animState) {
        switch (animState) {
          case 'full':
            this.$velocity(
              sidebarWrapElem,
              {
                maxWidth: [target, 0],
                paddingLeft: ['2em', '0em'],
                paddingRight: ['2em', '0em']
              },
              {
                ease: 'ease-in-out',
                duration: 400
              })
            break
          case 'mini':
            this.$velocity(sidebarWrapElem, {
              maxWidth: [0, target],
              paddingLeft: ['0em', '2em'],
              paddingRight: ['0em', '2em']
            },
            {
              ease: 'ease-in-out',
              duration: 400
            })
            break
          default:
        }
        sidebarWrapElem.className = animState
      }
    },
    initView: function () {
      const animState = this.getViewState()
      const sidebarWrapElem = document.getElementById('navside-wrapper')
      if (animState === 'full') {
        sidebarWrapElem.style.maxWidth = '100%'
        sidebarWrapElem.style.paddingLeft = '2em'
        sidebarWrapElem.style.paddingRight = '2em'
      } else if (animState === 'mini') {
        sidebarWrapElem.style.maxWidth = '0'
        sidebarWrapElem.style.paddingLeft = '0em'
        sidebarWrapElem.style.paddingRight = '0em'
      }
      sidebarWrapElem.className = animState
    }
  }
}
</script>

<style lang='stylus'>
@import 'navside.styl'
</style>
