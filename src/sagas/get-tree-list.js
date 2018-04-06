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
