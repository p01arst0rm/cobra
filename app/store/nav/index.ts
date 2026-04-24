export const state = () => ({
  navTopEnabled: null,
  navTopState: null,
  navSideEnabled: null,
  navSideState: null
})

export const mutations = {
  setNavTopEnabled(state, value) {
    state.navTopEnabled = value
  },
  setNavTopState(state, value) {
    state.navTopState = value
  },
  setNavSideEnabled(state, value) {
    state.navSideEnabled = value
  },
  setNavSideState(state, value) {
    state.navSideState = value
  },
  toggleNavActive(state) {
    switch (state.navActive) {
      case true:
        state.navActive = false
        break
      case false:
        state.navActive = true
        break
    }
  }
}
