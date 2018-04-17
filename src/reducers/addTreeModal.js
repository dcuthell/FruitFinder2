import createReducer from '../lib/helpers/createReducer';
import { SET_ADD_TREE_MODAL, HIDE_ADD_TREE_MODAL, SHOW_ADD_TREE_MODAL } from '../lib/constants/actions';


const defaultState = Map().set('addTreeModal', {visible: false, type: null, edible: null, condition: null, size: null});

export default createReducer(defaultState, {

  [SET_ADD_TREE_MODAL](state, action) {
    return state.set('addTreeModal', action.payload);
  },
  [SHOW_ADD_TREE_MODAL](state, action) {
    return state.set('addTreeModal', {visible: true, type: state.type, edible: state.edible, condition: state.condition, size: state.size});
  },
  [HIDE_ADD_TREE_MODAL](state, action) {
    return state.set('addTreeModal', {visible: false, type: state.type, edible: state.edible, condition: state.condition, size: state.size});
  },

});
