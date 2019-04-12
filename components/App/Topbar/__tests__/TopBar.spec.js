import { mount } from '@vue/test-utils'
import Topbar from '../Index'
import config from '~/util/config'

describe('Top bar', () => {
  const topBar = mount(Topbar, {})
  describe('title', () => {
    const title = topBar.find('.title')
    it('displays the name of the application', () => {
      expect(title.text()).toBe(config.appName)
    })
  })
})
