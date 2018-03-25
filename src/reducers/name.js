import { Map } from 'immutable';

import createReducer from 'lib/helpers/createReducer';
import { NAME_SET } from 'lib/constants/actions';


const defaultState = Map().set('name', '');
export default createReducer(defaultState, {

  [NAME_SET](state, action) {
    return state.set('name', action.payload);
  },

});


/**************************************************************
Here we have a typical reducer that makes use of the helpful
helper function createReducer.
**************************************************************/
