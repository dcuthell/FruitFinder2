import { put, takeLatest } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import firebase, { Reference } from 'react-native-firebase';

import { FETCH_TREE_LIST, SET_TREE_LIST } from '../lib/constants/actions';
import setTreeList from '../actions/set-tree-list';
import getTreeList from '../selectors/treeList';
import getViewCoords from '../selectors/viewCoords';

function transformData(oldTree, index) {
  const newTree = { id: index, location: { longitude: oldTree.X, latitude: oldTree.Y }, type: oldTree.Common, edible: oldTree.Edible, condition: oldTree.Condition, size: oldTree.Size  };
  console.log(newTree);
  return newTree;
}

function transformData1(response) {
  let newTreeArray = [];
  response._childKeys.map(async (index) => {const tree = await firebase.database().ref('/trees/' + index).once('value'); newTreeArray.push(transformData(tree._value, index));});
  return newTreeArray;
}

function* fetchTreeList() {
  console.log("fetchtreestarted");
  try {
    console.log("local AsyncStorage pull start...");
    const localTreeListJSON = yield AsyncStorage.getItem('TreeList');
    console.log("...complete");
    const localTreeList = JSON.parse(localTreeListJSON);
    if(false){
      console.log("localstorageload");
      yield put(setTreeList(localTreeList));
    }else{
      try {
        const response = yield firebase.database().ref('/trees').once('value');
        console.log(response);
        const treeArray = transformData1(response);
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
