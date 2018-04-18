import { fork, all } from 'redux-saga/effects';

import watchFetchTreeList from './fetch-tree-list.js';
import watchLoginWithGoogle from './login-with-google';
import watchAddTree from './add-tree';
import watchLoginAnonymously from './login-anonymously';
import watchLoginWithEmail from './login-with-email';
import watchSignupWithEmail from './signup-with-email';
import watchLogoutWithGoogle from './logout-with-google';
import watchLogoutAnonymously from './logout-anonymously';
import watchLogoutWithEmail from './logout-with-email';


export default function* rootSaga() {
  yield all([
    fork(watchLoginWithGoogle),
    fork(watchFetchTreeList),
    fork(watchAddTree),
    fork(watchLoginAnonymously),
    fork(watchLoginWithEmail),
    fork(watchSignupWithEmail),
    fork(watchLogoutWithGoogle),
    fork(watchLogoutAnonymously),
    fork(watchLogoutWithEmail),
  ]);
}

/**************************************************************
Here in the saga index.js file we combine all of our sagas into
a root saga. More specifically, we are combining all of our
saga watchers. This root saga is export to and used in the
store.js file.
**************************************************************/
