<template>
  <div
    class="animated-button"
  >
    <div class="fade-button">
      {{ tag }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentButton',
  props: {
    tag: {
      default: 'tag',
      type: String
    }
  }
}
</script>

<style scoped lang="stylus">
@import 'contentButton.styl'
</style>
