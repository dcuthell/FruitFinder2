import { put, takeLatest } from 'redux-saga/effects';
import firebase from 'react-native-firebase';
import { GoogleSignin } from 'react-native-google-signin';

import { LOGOUT_WITH_GOOGLE } from '../lib/constants/actions';
import setUserData from '../actions/set-user-data';


function* logoutWithGoogle() {
  console.log("saga started");
  try {
    console.log("Signin configure...");
    yield GoogleSignin.configure();
    console.log("...complete");
    console.log("Signin signout start...");
    yield GoogleSignin.signOut();
    console.log("...complete");
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

export default function* watchLogoutWithGoogle() {
  yield takeLatest(LOGOUT_WITH_GOOGLE, logoutWithGoogle);
}
