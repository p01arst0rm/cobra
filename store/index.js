import { getMode } from '~/util/proc/ui'

export const state = () => ({
  mode: null
})

export const mutations = {
  resize(state) {
    state.mode = getMode()
  },
  init(state) {
    state.mode = getMode()
  }
}
