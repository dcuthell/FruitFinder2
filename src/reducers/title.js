import { Map } from 'immutable';

import createReducer from 'lib/helpers/createReducer';
import { TITLE_SET } from 'lib/constants/actions';


const defaultState = Map().set('title', 'title from default state');

export default createReducer(defaultState, {

  [TITLE_SET](state, action) {
    return state.set('title', action.payload);
  },

});

/**************************************************************
Here we have a typical reducer that makes use of the helpful
helper function createReducer.
**************************************************************/
