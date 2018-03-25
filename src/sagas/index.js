import { fork, all } from 'redux-saga/effects';

// import watchFetchTitle from './fetch-title';


export default function* rootSaga() {
  yield all([
  ]);
}

/**************************************************************
Here in the saga index.js file we combine all of our sagas into
a root saga. More specifically, we are combining all of our
saga watchers. This root saga is export to and used in the
store.js file.
**************************************************************/
