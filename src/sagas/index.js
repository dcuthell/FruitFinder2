import { fork, all } from 'redux-saga/effects';

import watchFetchTreeList from './fetch-tree-list.js';
import watchLoginWithGoogle from './login-with-google';



export default function* rootSaga() {
  yield all([
    fork(watchLoginWithGoogle),
    fork(watchFetchTreeList),

  ]);
}

/**************************************************************
Here in the saga index.js file we combine all of our sagas into
a root saga. More specifically, we are combining all of our
saga watchers. This root saga is export to and used in the
store.js file.
**************************************************************/
