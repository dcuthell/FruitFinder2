import { put, takeLatest } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import firebase, { Reference } from 'react-native-firebase';

import { ADD_TREE } from '../lib/constants/actions';
import setTreeList from '../actions/set-tree-list';
import getTreeList from '../selectors/treeList';
import getViewCoords from '../selectors/viewCoords';
import addToTreeList from '../actions/add-to-tree-list';


function* addTree(action) {
  const tree = action.payload;
  console.log( tree );
  yield put(addToTreeList(tree));
  console.log("nope");
}

export default function* watchAddTree() {
  yield takeLatest(ADD_TREE, addTree);
}
