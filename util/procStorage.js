// used for setting and fetching data from storage
// ---------------------------------------------------------

// local storage handling
export function getLocalVar(key) {
  let response = null
  const fetchStore = localStorage.getItem(key)
  if (fetchStore) {
    try {
      response = JSON.parse(fetchStore)
    } catch (e) {
      localStorage.removeItem(key)
    }
  }
  return response
}

export function setLocalVar(key, value) {
  const current = getLocalVar(key)
  try {
    localStorage.setItem(key, value)
  } catch (e) {
    if (current !== null) {
      localStorage.setItem(current)
    }
  }
}

export function initLocalVar(key, fallback) {
  const stored = getLocalVar(key)
  if (stored) {
    return stored
  }
  setLocalVar(key, fallback)
  return fallback
}

// session storage handling
export function getSessionVar(key) {
  let response = null
  const fetchStore = sessionStorage.getItem(key)
  if (fetchStore) {
    try {
      response = JSON.parse(fetchStore)
    } catch (e) {
      localStorage.removeItem(key)
    }
  }
  return response
}

export function setSessionVar(key, value) {
  const current = getSessionVar(key)
  try {
    sessionStorage.setItem(key, value)
  } catch (e) {
    if (current !== null) {
      localStorage.setItem(current)
    }
  }
}

export function initSessionVar(key, fallback) {
  const stored = getSessionVar(key)
  if (stored) {
    return stored
  }
  setSessionVar(key, fallback)
  return fallback
}
