import { put, takeLatest } from 'redux-saga/effects';
import firebase from 'react-native-firebase';

import { FETCH_TREE_LIST, SET_TREE_LIST } from '../lib/constants/actions';
import setTreeList from '../actions/set-tree-list';
import getTreeList from '../selectors/treeList';
import getViewCoords from '../selectors/viewCoords';

function transformData(oldTree) {
  const newTree = { longitude: oldTree.X, latitude: oldTree.Y };
  console.log(newTree)
  return newTree;
}

function* fetchTreeList() {
  try {
    const response = yield firebase.database().ref().once('value');
    yield put(setTreeList(response._value.map(transformData)));
  } catch (error) {
    console.warn(error);
  }
}

export default function* watchFetchTreeList() {
  yield takeLatest(FETCH_TREE_LIST, fetchTreeList);
}
