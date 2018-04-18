import { put, takeLatest } from 'redux-saga/effects';
import firebase from 'react-native-firebase';


import { LOGIN_WITH_EMAIL } from '../lib/constants/actions';
import setUserData from '../actions/set-user-data';
import getUserData from '../selectors/userData';

function* loginWithEmail(action) {
  console.log("login with email saga started");
  try {
    console.log("Sign up start...");
    const email = action.payload.email;
    const password = action.payload.password;
    const createresult = yield firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password);
    console.log("...complete");
    console.log(createresult);
    console.log("Sign in start...");
    const currentUser = yield firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password)
    console.log("...complete");
    console.log(currentUser);
    let newUserData = { userInfo : currentUser.user['_user'], authInfo : currentUser.user['_auth'] }
    (newUserData.userInfo.displayName === null) ? "Validated User" : newUserData.userInfo.displayName;
    yield put(setUserData(newUserData));
  } catch (error){
    console.warn(error);
  }
}

export default function* watchLoginWithEmail() {
  yield takeLatest(LOGIN_WITH_EMAIL, loginWithEmail);
}
