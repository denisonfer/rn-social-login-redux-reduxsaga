import { all, takeLatest, put, call } from "redux-saga/effects";

import { logInSuccess } from "./actions";

export function* FBlogin({ payload }) {
  try {
    const avatar = payload.data.picture.data.url;
    const { name, email } = payload.data;

    const usuario = { avatar, name, email };
    const token = payload.token;

    yield put(logInSuccess(token, usuario, 'facebook'));
  } catch (error) {
    console.log('saga erro login' + error);
  }

}

export function* GoogleLogin({ payload }) {
  try {
    const token = payload.data.user.id;
    const { name, email, photo } = payload.data.user;
    const usuario = { name, email, photo };

    yield put(logInSuccess(token, usuario, 'google'));

  } catch (error) {
    console.log('GoogleLogin error login' + error);
  }

}

export default all([
  //  takeLatest('@persist/REYHADRATE', setToken),
  takeLatest('@auth/LOG_IN_FB_REQUEST', FBlogin),
  takeLatest('@auth/LOG_IN_GOOGLE_REQUEST', GoogleLogin),
  // takeLatest('@auth/LOG_OUT', logOutApp),
])