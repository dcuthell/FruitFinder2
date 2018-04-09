import { Map } from 'immutable';

import createReducer from '../lib/helpers/createReducer';
import { SET_TREE_LIST, ADD_TO_TREE_LIST } from '../lib/constants/actions';


const defaultState = Map().set('treeList', []);

export default createReducer(defaultState, {

  [SET_TREE_LIST](state, action) {
    return state.set('treeList', action.payload);
  },
  [ADD_TO_TREE_LIST](state, action) {
    const treeList = state.treeList.getState('treeList');
    treeList.push(action.payload);
    return state.set('treeList', action.payload);
  }

});
