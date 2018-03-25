
import React from 'react';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { Image } from 'react-native';

import MapScreen from './containers/MapScreen';

import routesNames from './lib/constants/routes';


const routes = {
  [routesNames.MapScreen]: {
    screen: MapScreen,
  },
};

const AppNavigator = StackNavigator(routes);

const AppWithoutNavigationState = props => (
  <AppNavigator
    navigation={addNavigationHelpers({
      dispatch: props.dispatch,
      state: props.nav,
    })}
  />
);

function mapNavToProps(store) {
  return store;
}

const AppWithNavigationState = connect(mapNavToProps)(AppWithoutNavigationState);


const navReducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
};


export default { AppWithNavigationState, navReducer };
