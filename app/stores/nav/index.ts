import { defineStore } from 'pinia'
import { getMode } from '~/util/proc/ui'

export const useNavStore = defineStore('nav', {
  state: () => ({
    mode: null,
    navTopEnabled: null,
    navTopState: null,
    navSideEnabled: null,
    navSideState: null
  }),
  actions: {
    init() {
      this.mode = getMode()
    },
    resize() {
      this.mode = getMode()
    },
      setNavTopEnabled(value) {
      this.navTopEnabled = value
    },
    setNavTopState(value) {
      this.navTopState = value
    },
    setNavSideEnabled(value) {
      this.navSideEnabled = value
    },
    setNavSideState(value) {
      this.navSideState = value
    },
    toggleNavActive(state) {
      switch (this.navActive) {
        case true:
          this.navActive = false
          break
        case false:
          this.navActive = true
          break
      }
    }
  },
})
