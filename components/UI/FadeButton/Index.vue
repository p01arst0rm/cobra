<template>
  <div
    class="animated-button"
    @click="toggle()"
  >
    <div class="fade-button">
      {{ tag }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'FadeButton',
  props: {
    tag: {
      default: 'tag',
      type: String
    }
  },
  methods: {
    toggle: function () {
      console.log('pressed!')
    }
  }
}
</script>

<style scoped lang="stylus">
@import 'fadebutton.styl'
</style>
