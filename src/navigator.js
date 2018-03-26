
import React from 'react';
import { connect } from 'react-redux';
import { TabNavigator, addNavigationHelpers } from 'react-navigation';
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers';
import { Image } from 'react-native';

import MapScreen from './containers/MapScreen';

import routesNames from './lib/constants/routes';


const routes = {
  [routesNames.Home]: {
    screen: MapScreen,
  },
  [routesNames.MapScreen]: {
    screen: MapScreen,
  },
  [routesNames.Another]: {
    screen: MapScreen,
  }
};

const AppNavigator = TabNavigator(routes);

const addListener = createReduxBoundAddListener("root");

const AppWithoutNavigationState = props => (
  <AppNavigator
    navigation={addNavigationHelpers({
      dispatch: props.dispatch,
      state: props.nav,
      addListener,
    })}/>
);

function mapNavToProps(state) {
  return { nav: state.nav }
}

const AppWithNavigationState = connect(mapNavToProps)(AppWithoutNavigationState);


const navReducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
};


export default { AppWithNavigationState, navReducer };
