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

@import 'assets/styles/default/ui.styl'

.animated-button {
  
  .fade-button {
    background: buttonBackground;
    border: buttonBorder;
    border-radius: .25rem;
    color: buttonColor;
    text-decoration: none;
    font-family: buttonFontFamily;
    font-size: 1.5rem;
    padding: .5rem 1rem;
    transition: buttonBackgroundTransition;
    user-select: none;
    text-align: center;
  }

  .fade-button:hover, .fade-button:focus {
    background: buttonBackgroundHighlight;
    color: buttonColorHighlight;
    transition: buttonBackgroundTransition;
  }
}

</style>
