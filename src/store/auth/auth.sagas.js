import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from 'src/utils/api';

import * as AuthType from './auth.types';
import * as authActions from './auth.actions';

export function* loadUserAsync() {
  try {
    const res = yield api.get('/auth');

    yield put(authActions.loadUserSuccess(res.data));
  } catch (err) {
    console.error(err);
    yield put(authActions.loadUserFail(err));
  }
}

export function* onSigninAsync({
  payload: {
    formData: { email, password },
    navigate
  }
}) {
  const body = {
    username: email,
    password
  };

  try {
    const res = yield api.post('/auth/signin', body);
    yield put(authActions.signinSuccess(res.data));
    yield navigate('/app/dashboard', { replace: true });
  } catch (err) {
    console.error(err);
    yield put(authActions.signinFail(err.message));
  }
}

export function* onSignupAsync({
  payload: {
    formData: { email, password, firstName, lastName },
    navigate
  }
}) {
  const body = {
    firstName,
    lastName,
    email,
    username: email,
    password
  };
  try {
    const res = yield api.post('/auth/signup', body);
    yield put(authActions.signupSuccess(res.data));
    yield navigate('/login', { replace: true });
  } catch (err) {
    console.error(err);
    const { errors } = err.response.data;
    // if (errors) {
    //   errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    // }

    yield put(authActions.signupFail(errors));
  }
}

export function* watchLoadUser() {
  yield takeLatest(AuthType.LOAD_USER_START, loadUserAsync);
}

export function* watchSignin() {
  yield takeLatest(AuthType.SIGN_IN_START, onSigninAsync);
}

export function* watchSignup() {
  yield takeLatest(AuthType.SIGN_UP_START, onSignupAsync);
}

export function* authSagas() {
  yield all([call(watchSignin), call(watchSignup), call(watchLoadUser)]);
}
