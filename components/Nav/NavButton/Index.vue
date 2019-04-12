<template>
  <div id="NavController">
    <div
      class="animated-button"
      @click="toggleNav()"
    >
      <FadeButton tag="menu" />
    </div>
  </div>
</template>

<script>
import FadeButton from '~/components/UI/FadeButton/Index.vue'

export default {
  name: 'NavButton',
  components: {
    FadeButton
  },
  methods: {
    toggleNav: function () {
      this.$store.commit('nav/toggleNavActive')
    }
  }
}
</script>

<style lang='stylus'>
@import 'navButton.styl'
</style>
