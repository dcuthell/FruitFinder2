import { Map } from 'immutable';

import createReducer from '../lib/helpers/createReducer';
import { SET_ADD_TREE_MODAL, HIDE_ADD_TREE_MODAL, SHOW_ADD_TREE_MODAL } from '../lib/constants/actions';


const defaultState = Map().set('addTreeModal', {visible: false, type: null, edible: null, condition: null, size: null});

export default createReducer(defaultState, {

  [SET_ADD_TREE_MODAL](state, action) {
    return state.set('addTreeModal', action.payload);
  },
  [SHOW_ADD_TREE_MODAL](state, action) {
    const modal = state.get('addTreeModal');
    return state.set('addTreeModal', {visible: true, type: modal.type, edible: modal.edible, condition: modal.condition, size: modal.size});
  },
  [HIDE_ADD_TREE_MODAL](state, action) {
    const modal = state.get('addTreeModal');
    return state.set('addTreeModal', {visible: false, type: modal.type, edible: modal.edible, condition: modal.condition, size: modal.size});
  },

});
