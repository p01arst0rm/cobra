import config from '~/util/config'

export function getMode() {
  const currentWidth = window.innerWidth
  if (currentWidth >= config.minWidthDesktop) {
    return 'full'
  } else if (currentWidth >= config.minWidthMini) {
    return 'mini'
  } else {
    return 'mobile'
  }
}
