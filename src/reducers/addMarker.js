import { Map } from 'immutable';

import createReducer from '../lib/helpers/createReducer';
import { SET_ADD_MARKER } from '../lib/constants/actions';


const defaultState = Map().set('addMarker', {latitude: null, longitude: null});

export default createReducer(defaultState, {

  [SET_ADD_MARKER](state, action) {
    console.log("HEEYYYYYY")
    return state.set('addMarker', action.payload);
  },


});
