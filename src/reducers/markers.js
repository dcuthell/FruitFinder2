import { Map } from 'immutable';

import createReducer from 'lib/helpers/createReducer';
import { SET_MARKERS, ADD_MARKER } from 'lib/constants/actions';


const defaultState = Map().set('markers', [{ coordinate: { latitude: 45.527, longitude: -122.683 } }]);

export default createReducer(defaultState, {

  [SET_MARKERS](state, action) {
    return state.set('markers', action.payload);
  },

  [ADD_MARKER](state, action) {
    const markers = state.markers.getState('markers');
    markers.push(action.payload);
    return state.set('markers', markers);
  },

});

/**************************************************************
Here we have another reducer that makes use of the helpful
helper function createReducer. This particular reducer handles
two different actions; one sets the state of 'markers', and the
other adds a marker to the pre-existing array.
**************************************************************/
