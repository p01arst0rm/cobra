// used for handling current session
// ---------------------------------------------------------

// -- OBSOLETE --
// check for an active session
const sessionID = getSessionID()
if (sessionID !== '') {
  console.log('session:')
  console.log(sessionID)
} else {
  console.log('no session!!')
}

function getSessionID() {
  console.log('connecting to api')
  const xhr = new XMLHttpRequest()
  xhr.onreadystatechange = function () {
    if (this.readyState != 4) return

    if (this.status == 200) {
      // var data = JSON.parse(this.responseText);
      console.log(this.responseText)
      // we get the returned data
    }

    // end of state change: it can be after some time (async)
  }

  xhr.open('GET', 'http://api.ctf.com/api/', true)
  xhr.send()
}
