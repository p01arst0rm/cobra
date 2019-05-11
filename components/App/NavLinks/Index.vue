<template>
  <div class="nav-links-wrapper">
    <nuxt-link
      class="nav-link"
      to="/"
      exact
    >
      Home
    </nuxt-link>
    <nuxt-link
      class="nav-link"
      to="/account/login"
      exact
    >
      Login
    </nuxt-link>
    <nuxt-link
      class="nav-link"
      to="/account/signup"
      exact
    >
      Signup
    </nuxt-link>
    <nuxt-link
      class="nav-link"
      to="/account/profile"
      exact
    >
      Profile
    </nuxt-link>
    <nuxt-link
      class="nav-link"
      to="/about"
      exact
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
