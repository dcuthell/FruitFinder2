import { put, takeLatest } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import firebase, { Reference } from 'react-native-firebase';

import { ADD_TREE } from '../lib/constants/actions';
import setTreeList from '../actions/set-tree-list';
import getTreeList from '../selectors/treeList';
import getViewCoords from '../selectors/viewCoords';
import addToTreeList from '../actions/add-to-tree-list';

function makeFirebaseTree(tree){
  const id = tree.id;
  return({
      "Common" : tree.type,
      "Edible" : tree.edible,
      "Condition" : tree.condition,
      "Size" : tree.size,
      "X" : tree.location.longitude,
      "Y" : tree.location.latitude
  });
}
function* addTree(action) {
  const tree = action.payload;
  yield put(addToTreeList(tree));
  yield firebase.database().ref('/log'+`/${tree.id}`).set(makeFirebaseTree(tree));
}

export default function* watchAddTree() {
  yield takeLatest(ADD_TREE, addTree);
}

// id: index, location: { longitude: oldTree.X, latitude: oldTree.Y }, type: oldTree.Common, edible: oldTree.Edible, condition: oldTree.Condition, size: oldTree.Size
