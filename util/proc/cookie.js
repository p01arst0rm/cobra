// used for setting and fetching data from cookies
// ---------------------------------------------------------

const expire = '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'

function formatcookie() {
  const decodedCookie = decodeURIComponent(document.cookie)
  const cookieArray = decodedCookie.split(';')
  const keypairArray = []

  for (let i = 0; i < cookieArray.length; i += 1) {
    const c = cookieArray[i].trim()

    // break up keypairs ( '=' is valid value inside KEY='VALUE')
    const keypair = c.match(/((?:'|")[^*]*(?:'|"))|[^=]+/g)
    keypairArray[i] = keypair
  }
  return keypairArray
}

export function getCookie(cname) {
  const keypairArray = formatcookie()
  console.log(keypairArray)

  for (let i = 0; i < keypairArray.length; i += 1) {
    const keypair = keypairArray[i]
    if (keypair[0] === cname) {
      return keypair[1]
    }
  }
}

export function setCookie(cname, value) {
  const cookie = cname + '=' + value + ';'
  document.cookie = cookie
}

export function deleteCookie(cname) {
  document.cookie = cname + expire
}
