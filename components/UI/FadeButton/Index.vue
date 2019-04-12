<template>
  <div class="fade-button">
    {{ tag }}
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
  }
}
</script>

<style lang="stylus">
@import 'fadebutton.styl'
</style>
