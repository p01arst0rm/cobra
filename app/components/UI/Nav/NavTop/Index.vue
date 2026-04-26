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
import NavLinks from '~/components/NavLinks/Index.vue'
import { useNavStore } from '~/stores/nav'

export default {
  name: 'NavTop',
  components: {
    NavLinks
  },
  setup() {
    const navStore = useNavStore()
    return { navStore }
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
    this.navStore.$onAction(( { name, after } ) => {
      after((result) => {
        switch (name) {
          case 'init':
            this.init()
            break
          case 'resize':
            this.update()
            break
          case 'toggleNavActive':
            this.toggleNavActive()
            break
        }
      })
    })
  },
  methods: {
    init: function () {
    /* initalise component */
      switch (this.navStore.mode) {
        case 'full':
          this.navStore.setNavTopEnabled(false)
          break
        default:
            this.navStore.setNavTopEnabled(true)
          break
      }
      this.navStore.setNavTopState('closed')
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
      switch (this.navStore.mode) {
         case 'full':
          this.navStore.setNavTopEnabled(false)
          if (this.navStore.navTopState === 'open') {
            this.animateNavClose()
            this.navStore.setNavTopState('closed')
          }
          break
        default:
          this.navStore.setNavTopEnabled(true)
          break
      }
    },
    toggleNavActive: function () {
      /* toggle nav open/closed */
      if (this.navStore.navTopEnabled) {
        switch (this.navStore.navTopState) {
          case 'open':
            this.animateNavClose()
            this.navStore.setNavTopState('closed')
            break
          case 'closed':
            this.animateNavOpen()
            this.navStore.setNavTopState('open')
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
