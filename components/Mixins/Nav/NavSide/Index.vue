<template>
  <div id="navside-container">
    <div id="navside-wrapper">
      <nav id="navside">
        <NavLinks />
      </nav>
    </div>
  </div>
</template>

<script>
import NavLinks from '~/components/App/NavLinks/Index.vue'

export default {
  name: 'NavSide',
  components: {
    NavLinks
  },
  data() {
    return {
      elemNavSideWrap: null,
      elemNavSide: null
    }
  },
  mounted() {
    /* fetch component elements */
    this.elemNavSideWrap = document.getElementById('navside-wrapper')
    this.elemNavSide = document.getElementById('navside')

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
          this.$store.commit('nav/setNavSideEnabled', true)
          this.$store.commit('nav/setNavSideState', 'open')
          this.$velocity(this.elemNavSideWrap,
            {
              maxWidth: '100%',
              paddingLeft: '2em',
              paddingRight: '2em'
            })
          break
        default:
          this.$store.commit('nav/setNavSideEnabled', false)
          this.$store.commit('nav/setNavSideState', 'closed')
          this.$velocity(this.elemNavSideWrap,
            {
              maxWidth: '0em',
              paddingLeft: '0em',
              paddingRight: '0em'
            })
          break
      }
    },
    update: function () {
      /* update component */
      switch (this.$store.state.mode) {
        case 'full':
          this.$store.commit('nav/setNavSideEnabled', true)
          if (this.$store.state.nav.navSideState === 'open') {
            this.animateNavOpen()
          }
          break
        default:
          if (this.$store.state.nav.navSideEnabled) {
            this.$store.commit('nav/setNavSideEnabled', false)
            if (this.$store.state.nav.navSideState === 'open') {
              this.animateNavClose()
            }
          }
          break
      }
    },
    toggleNavActive: function () {
      /* toggle nav open/closed */
      if (this.$store.state.nav.navSideEnabled) {
        switch (this.$store.state.nav.navSideState) {
          case 'open':
            this.animateNavClose()
            this.$store.commit('nav/setNavSideState', 'closed')
            break
          case 'closed':
            this.animateNavOpen()
            this.$store.commit('nav/setNavSideState', 'open')
            break
          default:
            break
        }
      }
    },
    animateNavOpen: function () {
      /* nav open animation */
      this.$velocity(this.elemNavSideWrap,
        {
          maxWidth: [this.elemNavSide.scrollWidth, 0],
          paddingLeft: ['2em', 0],
          paddingRight: ['2em', 0]
        },
        {
          ease: 'ease-in-out',
          duration: 300
        }
      )
    },
    animateNavClose: function () {
      /* nav close animation */
      this.$velocity(this.elemNavSideWrap,
        {
          maxWidth: ['0em', this.elemNavSide.scrollWidth],
          paddingLeft: ['0em', '2em'],
          paddingRight: ['0em', '2em']
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
@import 'navSide.styl'
</style>
