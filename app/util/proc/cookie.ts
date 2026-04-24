// used for setting and fetching data from cookies
// ---------------------------------------------------------

const expire = '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'

export function getCookie(cname) {
  const cookieArray = decodeURIComponent(document.cookie).split(';')

  for (let i = 0; i < cookieArray.length; i += 1) {
    // break up keypairs ( '=' is valid value inside KEY='VALUE')
    const keypair = cookieArray[i]
      .trim().match(/((?:'|")[^*]*(?:'|"))|[^=]+/g)

    if (keypair[0] === cname) {
      return keypair[1]
    }
  }
  return null
}

export function setCookie(cname, value) {
  const cookie = cname + '=' + value + ';'
  document.cookie = cookie
}

export function deleteCookie(cname) {
  document.cookie = cname + expire
}
