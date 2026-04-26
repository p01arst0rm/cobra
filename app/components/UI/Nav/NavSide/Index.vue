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
import NavLinks from '~/components/NavLinks/Index.vue'
import { useNavStore } from '~/stores/nav'

export default {
  name: 'NavSide',
  components: {
    NavLinks
  },
  setup() {
    const navStore = useNavStore()
    return { navStore }
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
           this.navStore.setNavSideEnabled(true)
           this.navStore.setNavSideState('open')
           this.$velocity(this.elemNavSideWrap,
             {
              maxWidth: '100%',
               paddingLeft: '2em',
              paddingRight: '2em'
             })
           break
        default:
          this.navStore.setNavSideEnabled(false)
          this.navStore.setNavSideState('closed')
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
      switch (this.navStore.mode) {
        case 'full':
          this.navStore.setNavSideEnabled(true)
          if (this.navStore.navSideState === 'open') {
            this.animateNavOpen()
          }
          break
        default:
          if (this.navStore.navSideEnabled) {
            this.navStore.setNavSideEnabled(false)
            if (this.navStore.navSideState === 'open') {
              this.animateNavClose()
            }
          }
          break
      }
    },
    toggleNavActive: function () {
      /* toggle nav open/closed */
      if (this.navStore.navSideEnabled) {
        switch (this.navStore.navSideState) {
          case 'open':
            this.animateNavClose()
            this.navStore.setNavSideState('closed')
            break
          case 'closed':
            this.animateNavOpen()
            this.navStore.setNavSideState('open')
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
