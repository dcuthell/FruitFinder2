import { combineReducers } from 'redux';

import title from 'reducers/title';
import connectivity from 'reducers/connectivity';
import name from 'reducers/name';
import viewCoords from 'reducers/viewCoords';
import markers from 'reducers/markers';

export const reducers = { title, connectivity, name, viewCoords, markers };

export default function getRootReducer(navReducer) {
  return combineReducers({
    nav: navReducer,
    ...reducers,
  });
}


/**************************************************************
Here's where we combine our reducers into one, in the reducers'
index.js. First the reducers are imported and turned into a
single object called reducers. These are combined with the
navReducer, a reducer for react-navigation that is being passed
in as an argument, within combineReducers. The result is
returned to navigator.js.
**************************************************************/
