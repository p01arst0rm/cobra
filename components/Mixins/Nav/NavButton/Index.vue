<template>
  <div id="NavController">
    <div
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
