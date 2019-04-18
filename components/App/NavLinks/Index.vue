<template>
  <div class="nav-links-wrapper">
    <nuxt-link
      class="nav-link"
      to="/"
    >
      Home
    </nuxt-link>
    <nuxt-link
      class="nav-link"
      to="/account/login"
    >
      Login
    </nuxt-link>
    <nuxt-link
      class="nav-link"
      to="/account/signup"
    >
      Signup
    </nuxt-link>
    <nuxt-link
      class="nav-link"
      to="/account/profile"
    >
      Profile
    </nuxt-link>
    <nuxt-link
      class="nav-link"
      to="/about"
    >
      About
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'NavLinks'
}
</script>
