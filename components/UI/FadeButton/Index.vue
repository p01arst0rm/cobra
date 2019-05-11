<template>
  <div class="animated-button">
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
  }
}
</script>

<style scoped lang="stylus">
@import 'fadebutton.styl'
</style>
