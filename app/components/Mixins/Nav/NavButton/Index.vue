<template>
  <div id="NavController">
    <div
      @click="toggleNav()"
    >
      <ContentButton tag="menu" />
    </div>
  </div>
</template>

<script>
import ContentButton from '~/components/UI/ContentButton/Index.vue'

export default {
  name: 'NavButton',
  components: {
    ContentButton
  },
  methods: {
    toggleNav: function () {
      this.$store.commit('nav/toggleNavActive')
    }
  }
}
</script>
