import { put, takeLatest } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import firebase from 'react-native-firebase';

import { FETCH_TREE_LIST, SET_TREE_LIST } from '../lib/constants/actions';
import setTreeList from '../actions/set-tree-list';
import getTreeList from '../selectors/treeList';
import getViewCoords from '../selectors/viewCoords';

function transformData(oldTree, index) {
  const newTree = { id: index, location: { longitude: oldTree.X, latitude: oldTree.Y }, type: oldTree.Common, edible: oldTree.Edible, condition: oldTree.Condition, size: oldTree.Size  };
  console.log(newTree)
  return newTree;
}

function* fetchTreeList() {
  try {
    const localTreeListJSON = yield AsyncStorage.getItem('TreeList');
    const localTreeList = JSON.parse(localTreeListJSON);
    if(localTreeList !== null){
      console.log("localstorageload");
      yield put(setTreeList(localTreeList));
    }else{
      try {
        const response = yield firebase.database().ref().once('value');
        const treeArray = (response._value.map(transformData))
        console.log("remotestorageload");
        try {
          yield AsyncStorage.setItem('TreeList', JSON.stringify(treeArray));
        }catch(error){
          console.warn(error);
        }
        yield put(setTreeList(treeArray));
      } catch (error) {
        console.warn(error);
      }
    }
  } catch (error){
    console.warn(error);
  }
}

export default function* watchFetchTreeList() {
  yield takeLatest(FETCH_TREE_LIST, fetchTreeList);
}
