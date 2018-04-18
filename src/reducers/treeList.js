import { Map } from 'immutable';

import createReducer from '../lib/helpers/createReducer';
import { SET_TREE_LIST, ADD_TO_TREE_LIST } from '../lib/constants/actions';


const defaultState = Map().set('treeList', []);

export default createReducer(defaultState, {

  [SET_TREE_LIST](state, action) {
    console.log("set list");
    return state.set('treeList', action.payload);
  },
  [ADD_TO_TREE_LIST](state, action) {
    console.log("add list");
    const treeList = state.get('treeList'); //ALSO DONT FORGET TO DO THIS, SINCE JUST REFERNCING STATE IS REFERNCING A MAP, NOT AN OBJECT. YOU MOTHERFUCKER YOU.
    const newTreeList = [ ...treeList,
                          action.payload]; // Don't try to use push you IDIOT!!!! REDUX IS IMMUTABLE LIKE YOUR IGNORANCE
    return state.set('treeList', newTreeList);
  }

});
