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
import { useNavStore } from '~/stores/nav'

export default {
  name: 'NavButton',
  components: {
    ContentButton
  },
  setup() {
    const navStore = useNavStore()
    return { navStore }
  },
  methods: {
    toggleNav: function () {
      this.navStore.toggleNavActive()
    }
  }
}
</script>
