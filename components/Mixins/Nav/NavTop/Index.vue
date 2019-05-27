<template>
  <div id="navtop-container">
    <div id="navtop-wrapper">
      <nav id="navtop">
        <NavLinks />
      </nav>
    </div>
  </div>
</template>

<script>
import NavLinks from '~/components/App/NavLinks/Index.vue'

export default {
  name: 'NavTop',
  components: {
    NavLinks
  },
  data() {
    return {
      elemNavTopWrap: null,
      elemNavTop: null
    }
  },
  mounted() {
    /* fetch component elements */
    this.elemNavTopWrap = document.getElementById('navtop-wrapper')
    this.elemNavTop = document.getElementById('navtop')

    /* hook onto calls */
    this.$store.subscribe((mutation) => {
      switch (mutation.type) {
        case 'init':
          this.init()
          break
        case 'resize':
          this.update()
          break
        case 'nav/toggleNavActive':
          this.toggleNavActive()
          break
      }
    })
  },
  methods: {
    init: function () {
      /* initalise component */
      switch (this.$store.state.mode) {
        case 'full':
          this.$store.commit('nav/setNavTopEnabled', false)
          break
        default:
          this.$store.commit('nav/setNavTopEnabled', true)
          break
      }
      this.$store.commit('nav/setNavTopState', 'closed')
      this.$velocity(this.elemNavTopWrap,
        {
          maxHeight: '0',
          paddingTop: '0em',
          paddingBottom: '0em'
        }
      )
    },
    update: function () {
      /* update component */
      switch (this.$store.state.mode) {
        case 'full':
          this.$store.commit('nav/setNavTopEnabled', false)
          if (this.$store.state.nav.navTopState === 'open') {
            this.animateNavClose()
            this.$store.commit('nav/setNavTopState', 'closed')
          }
          break
        default:
          this.$store.commit('nav/setNavTopEnabled', true)
          break
      }
    },
    toggleNavActive: function () {
      /* toggle nav open/closed */
      if (this.$store.state.nav.navTopEnabled) {
        switch (this.$store.state.nav.navTopState) {
          case 'open':
            this.animateNavClose()
            this.$store.commit('nav/setNavTopState', 'closed')
            break
          case 'closed':
            this.animateNavOpen()
            this.$store.commit('nav/setNavTopState', 'open')
            break
          default:
            break
        }
      }
    },
    animateNavOpen: function () {
      /* nav open animation */
      this.$velocity(this.elemNavTopWrap,
        {
          maxHeight: [this.elemNavTop.scrollHeight, 0],
          paddingTop: ['1.5em', 0],
          paddingBottom: ['1.5em', 0]
        },
        {
          ease: 'ease-in-out',
          duration: 300
        }
      )
    },
    animateNavClose: function () {
      /* nav close animation */
      this.$velocity(this.elemNavTopWrap,
        {
          maxHeight: [0, this.elemNavTop.scrollHeight],
          paddingTop: [0, '1.5em'],
          paddingBottom: [0, '1.5em']
        },
        {
          ease: 'ease-in-out',
          duration: 300
        }
      )
    }
  }
}
</script>

<style lang='stylus'>
@import 'navTop.styl'
</style>
