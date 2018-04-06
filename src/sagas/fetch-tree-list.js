import { put, takeLatest } from 'redux-saga/effects';
import firebase from 'react-native-firebase';

import { FETCH_TREE_LIST } from '../lib/constants/actions';
import setTreeList from '../actions/set-tree-list';
import getTreeList from '../selectors/treeList';
import getViewCoords from '../selectors/viewCoords';


function* fetchTreeList() {
  try {
    const response = yield firebase.database().ref("/6081").once('value');
    console.log(response);
    console.log("heya");
    const treeList = "Heey buddy";
    yield setTreeList(response);
    console.log(getViewCoords());
  } catch (error) {
    console.warn(error);
  }
}

export default function* watchFetchTreeList() {
  yield takeLatest(FETCH_TREE_LIST, fetchTreeList);
}
