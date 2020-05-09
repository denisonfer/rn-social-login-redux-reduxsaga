export function FBloginRequest(data, token) {
  return {
    type: '@auth/LOG_IN_FB_REQUEST',
    payload: { data, token },
  }
}

export function GoogleLoginRequest(data) {
  return {
    type: '@auth/LOG_IN_GOOGLE_REQUEST',
    payload: { data },
  }
}

export function logInSuccess(token, usuario, origem) {
  return {
    type: '@auth/LOG_IN_SUCCESS',
    payload: {
      token,
      usuario,
      origem,
    },
  }
}

export function logOut() {
  return {
    type: '@auth/LOG_OUT',
  }
}