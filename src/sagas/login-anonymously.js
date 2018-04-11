import { put, takeLatest } from 'redux-saga/effects';
import firebase from 'react-native-firebase';


import { LOGIN_ANONYMOUSLY } from '../lib/constants/actions';
import setUserData from '../actions/set-user-data';
import getUserData from '../selectors/userData';

function* loginAnonymously() {
  console.log("loginanon saga started");
  try {
    console.log("Sign in start...");
    const result = yield firebase.auth.signInAnonymously();
    console.log(result);
    console.log("...complete");

    yield put(setUserData({userInfo: null, authinfo: null}));
  } catch (error){
    console.warn(error);
  }
}

export default function* watchLoginAnonymously() {
  yield takeLatest(LOGIN_ANONYMOUSLY, loginAnonymously);
}
