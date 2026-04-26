import { defineStore } from 'pinia'
import { getMode } from '~/util/proc/ui'

export const useMainStore = defineStore('main', {
  state: () => ({
    mode: null
  }),
  actions: {
    resize() {
      this.mode = getMode()
    },
    init() {
      this.mode = getMode()
    }
  },
})

