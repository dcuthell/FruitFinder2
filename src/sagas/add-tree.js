import { put, takeLatest } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import firebase, { Reference } from 'react-native-firebase';

import { ADD_TREE } from '../lib/constants/actions';
import setTreeList from '../actions/set-tree-list';
import getTreeList from '../selectors/treeList';
import getViewCoords from '../selectors/viewCoords';


function* addTree(tree) {
  console.log("addtreestarted\n" + tree );

}

export default function* watchAddTree() {
  yield takeLatest(ADD_TREE, addTree);
}
