<template>
  <div id="NavController">
    <button
      @click="toggleNav()"
    >
      aaa
    </button>
  </div>
</template>

<script>

export default {
  name: 'NavButton',
  methods: {
    toggleNav: function () {
      this.$store.commit('nav/toggleNavActive')
    }
  }
}
</script>
