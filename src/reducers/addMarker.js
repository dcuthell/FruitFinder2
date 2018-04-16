import { Map } from 'immutable';

import createReducer from '../lib/helpers/createReducer';
import { SET_ADD_MARKER, SHOW_ADD_MARKER } from '../lib/constants/actions';


const defaultState = Map().set('addMarker', {visibility: false, latitude: null, longitude: null});

export default createReducer(defaultState, {

  [SET_ADD_MARKER](state, action) {
    return state.set('addMarker', action.payload);
  },
  [SHOW_ADD_MARKER](state, action) {
    return state.set('addMarker', {visibility: true, latitude: state.latitude, longitude: state.longitude});
  },

});
