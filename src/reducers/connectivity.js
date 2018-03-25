import { Map } from 'immutable';

import createReducer from 'lib/helpers/createReducer';
import { CONNECTIVITY_SET } from 'lib/constants/actions';


const defaultState = Map().set('connectivity', true);
export default createReducer(defaultState, {

  [CONNECTIVITY_SET](state, action) {
    return state.set('connectivity', action.payload);
  },

});

/**************************************************************
Here we have a typical reducer that makes use of the helpful
helper function createReducer.

  import { Map } from 'immutable';

  import createReducer from 'lib/helpers/createReducer'
  import { SOME_ACTION, ANOTHER_ACTION } from 'lib/constants/actions'


  const defaultState = Map().set('state1', true);
  const defaultState = Map().set('sandwich', false);
  export default createReducer(defaultState, {

    [SOME_ACTION](state, action) {
      return state.set('state1', action.payload);
    },

    [ANOTHER_ACTION](state, action) {
      return state.set('sandwich', action.payload);
    },

  });

More actions can be added on!
**************************************************************/
