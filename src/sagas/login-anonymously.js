import { put, takeLatest } from 'redux-saga/effects';
import firebase from 'react-native-firebase';
import { GoogleSignin } from 'react-native-google-signin';

import { LOGIN_ANONYMOUSLY } from '../lib/constants/actions';
import setUserData from '../actions/set-user-data';
import getUserData from '../selectors/userData';

function* loginWithGoogle() {
  console.log("saga started");
  try {
    console.log("Sign in configure...");
    yield GoogleSignin.configure();
    console.log("...complete");
    console.log("Sign in data pull start...");
    const data = yield GoogleSignin.signIn();
    console.log("...complete");
    console.log("Firebase credential pull...");
    const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken);
    console.log("...complete");
    console.log("Firebase sign in start ...");
    const currentUser = yield firebase.auth().signInAndRetrieveDataWithCredential(credential);
    console.log("...complete");
    console.log("Userdata transform start");
    const newUserData = { userInfo : currentUser.user['_user'], authinfo : currentUser.user['_auth'] }
    console.log(newUserData);
    console.log("...complete");
    console.log("User store save start...");
    // const userString = JSON.stringify(currentUser.user.toJSON());
    yield put(setUserData(newUserData));
  } catch (error){
    console.warn(error);
  }
}

export default function* watchLoginWithGoogle() {
  yield takeLatest(LOGIN_WITH_GOOGLE, loginWithGoogle);
}
