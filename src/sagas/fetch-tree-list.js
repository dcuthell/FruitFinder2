import { put, takeLatest } from 'redux-saga/effects';
import firebase from 'react-native-firebase';

import { FETCH_TREE_LIST } from '../lib/constants/actions';
import setTreeList from '../actions/set-tree-list';


function* fetchTreeList() {
  try {
    const response = yield firebase.database().ref().once('value');
    const treeList = yield response.json();
    yield put(setTreeList(treeList));
  } catch (error) {
    console.warn(error);
  }
}

export default function* watchFetchTreeList() {
  yield takeLatest(FETCH_TREE_LIST, fetchTreeList);
}
