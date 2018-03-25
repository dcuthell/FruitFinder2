import { put, takeLatest } from 'redux-saga/effects';

import { TITLE_FETCH } from 'lib/constants/actions';
import setTitle from 'actions/set-title';
import { genericError } from 'actions/errors';

const rootVal = 'https://jsonplaceholder.typicode.com';
const paramVal = '/posts/1';

const request = new Request(`${rootVal}${paramVal}`, {
  method: 'GET',
});

function* fetchTitle() {
  try {
    const response = yield fetch(request);
    const responseJSON = yield response.json();
    const title = yield responseJSON.title.slice(0, 8); //Sliced since
    // its a very long string otherwise
    yield put(setTitle(title));
  } catch (error) {
    console.warn(error);
    yield put(genericError('Failed to fetch Title'));
  }
}

export default function* watchFetchTitle() {
  yield takeLatest(TITLE_FETCH, fetchTitle);
}

/**************************************************************
Here we have an example of a saga. This saga is broken down
into three parts; you'll find every saga you write will have
at least two. The first part is the actual API call, which can
also be imported from a separate file, or written within the
next part. This second part is the saga action, which
encapsulates the async request. The third part is the saga
watcher. This particular watcher is watching for the
TITLE_FETCH action. Upon 'seeing' it, it will execute the saga
action, fetchTitle.
**************************************************************/
