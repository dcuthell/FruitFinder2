import { put, takeLatest } from 'redux-saga/effects';
import firebase from 'react-native-firebase';


import { SIGNUP_WITH_EMAIL } from '../lib/constants/actions';
import setUserData from '../actions/set-user-data';
import getUserData from '../selectors/userData';

function* signupWithEmail(action) {
  console.log("login with email saga started");
  try {
    console.log("Sign up start...");
    const email = action.payload.email;
    const password = action.payload.password;
    const userName = action.payload.userName;
    const createresult = yield firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password);
    console.log("...complete");
    console.log(createresult);
    console.log("Update displayname start...");
    const currentUser = firebase.auth().currentUser;
    yield currentUser.updateProfile({displayName: userName, photUrl: "null" })
    console.log("...complete");
  } catch (error){
    console.warn(error);
  }
}

export default function* watchsignupWithEmail() {
  yield takeLatest(SIGNUP_WITH_EMAIL, signupWithEmail);
}
