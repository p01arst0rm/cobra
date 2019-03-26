<template>
  <div class="e-burger">
    {{ tag }}
  </div>
</template>

<script>
export default {
  name: 'Eburger',
  props: {
    tag: {
      default: 'tag',
      type: String
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import 'eburger.styl'
</style>
