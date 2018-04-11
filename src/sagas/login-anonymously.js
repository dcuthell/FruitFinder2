import { put, takeLatest } from 'redux-saga/effects';
import firebase from 'react-native-firebase';


import { LOGIN_ANONYMOUSLY } from '../lib/constants/actions';
import setUserData from '../actions/set-user-data';
import getUserData from '../selectors/userData';

function* loginAnonymously() {
  console.log("loginanon saga started");
  try {
    console.log("Sign in start...");
    const currentUser = yield firebase.auth().signInAnonymouslyAndRetrieveData();
    console.log("...complete");
    let newUserData = { userInfo : currentUser.user['_user'], authinfo : currentUser.user['_auth'] }
    newUserData.userInfo.displayName = "Anonymous User";
    const blah = yield firebase.auth().currentUser;
    console.log(blah);
    yield put(setUserData(newUserData));
  } catch (error){
    console.warn(error);
  }
}

export default function* watchLoginAnonymously() {
  yield takeLatest(LOGIN_ANONYMOUSLY, loginAnonymously);
}
