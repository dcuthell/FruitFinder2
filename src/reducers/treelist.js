import { Map } from 'immutable';

import createReducer from '../helpers/createReducer';
import { SET_TREE_LIST } from '../constants/actions';


const defaultState = Map().set('treeList', []);

export default createReducer(defaultState, {

  [SET_TREE_LIST](state, action) {
    return state.set('treeList', action.payload);
  },

});
