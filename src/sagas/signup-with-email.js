import { put, takeLatest } from 'redux-saga/effects';
import firebase, { User } from 'react-native-firebase';


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
    let currentUser = yield firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password);
    console.log("...complete");
    console.log(currentUser);
    console.log("Update displayname start...");
    yield firebase.auth().currentUser.updateProfile({displayName: userName, photUrl: "null" })
    console.log("...complete");
    currentUser = firebase.auth().currentUser;
    console.log(currentUser);
    const newUserData = { userInfo : currentUser['_user'], authinfo : currentUser['_auth'] }
    console.log(newUserData);
    console.log("...complete");
    console.log("User store save start...");
    // const userString = JSON.stringify(currentUser.user.toJSON());
    yield put(setUserData(newUserData));
  } catch (error){
    console.warn(error);
  }
}

export default function* watchsignupWithEmail() {
  yield takeLatest(SIGNUP_WITH_EMAIL, signupWithEmail);
}
