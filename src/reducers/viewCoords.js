import { Map } from 'immutable';

import createReducer from 'lib/helpers/createReducer';
import { SET_VIEW_COORDS } from 'lib/constants/actions';


const defaultState = Map().set('viewCoords', {
  latitude: 45.5231,
  longitude: -122.6708,
  latitudeDelta: 0.05,
  longitudeDelta: 0.05,
});

export default createReducer(defaultState, {

  [SET_VIEW_COORDS](state, action) {
    return state.set('viewCoords', action.payload);
  },

});

/**************************************************************
Here we have a typical reducer that makes use of the helpful
helper function createReducer.
**************************************************************/
