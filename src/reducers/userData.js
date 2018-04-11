import { Map } from 'immutable';

import createReducer from '../lib/helpers/createReducer';
import { SET_USER_DATA } from '../lib/constants/actions';


const defaultState = Map().set('userData', { userInfo: null, authInfo: null});

export default createReducer(defaultState, {

  [SET_USER_DATA](state, action) {
    return state.set('userData', action.payload);
  },

});
