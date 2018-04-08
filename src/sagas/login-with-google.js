import { put, takeLatest } from 'redux-saga/effects';
import firebase from 'react-native-firebase';
import { GoogleSignin } from 'react-native-google-signin';

import { LOGIN_WITH_GOOGLE } from '../lib/constants/actions';
import setTreeList from '../actions/set-tree-list';
import getTreeList from '../selectors/treeList';
import getViewCoords from '../selectors/viewCoords';

function* loginWithGoogle(navigator) {
  console.log("saga started");
  console.log(navigator);

  try {
    yield GoogleSignin.configure();
    console.log("1");
    const data = yield GoogleSignin.signIn();
    const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken);
    console.log("2");
    const currentUser = yield firebase.auth().signInAndRetrieveDataWithCredential(credential);
    console.log("3");
    console.info(JSON.stringify(currentUser.user.toJSON()));
    console.log(currentUser);
  } catch (error){
    console.warn(error);
  }
}

export default function* watchLoginWithGoogle() {
  yield takeLatest(LOGIN_WITH_GOOGLE, loginWithGoogle);
}
