import { put, takeLatest } from 'redux-saga/effects';
import firebase from 'react-native-firebase';

import { LOGOUT_WITH_EMAIL } from '../lib/constants/actions';


function* logoutWithEmail() {
  console.log("saga started");
  try {
    console.log("Firebase logout start...");
    yield firebase.auth().signOut();
    console.log("...complete");
    console.log("Store update start ...");
    const newUserData = { userInfo : null, authInfo : null }
    yield put(setUserData(newUserData));
    console.log("...complete");
  } catch (error){
    console.warn(error);
  }
}

export default function* watchLogoutWithEmail() {
  yield takeLatest(LOGOUT_WITH_EMAIL, logoutWithEmail);
}
