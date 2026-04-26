<template>
  <div id="content-container">
    <NavSide />
    <PageContainer />
  </div>
</template>

<script>
import NavSide from '~/components/UI/Nav/NavSide/Index.vue'
import PageContainer from '~/components/UI/PageContainer/Index.vue'

export default {
  components: {
    NavSide,
    PageContainer
  }
}
</script>

<style lang="stylus">

#content-container {
  flex: 1;
  display:flex;
  flex-wrap: wrap;
  flex-direction: row;
}

</style>
