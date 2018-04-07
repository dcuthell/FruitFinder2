
import React from 'react';
import { connect } from 'react-redux';
import { TabNavigator, StackNavigator, SwitchNavigator, addNavigationHelpers } from 'react-navigation';
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers';
import { Image } from 'react-native';

import LandingScreen from './containers/LandingScreen';
import MapScreen from './containers/MapScreen';
import LoginScreen from './containers/LoginScreen';
import SignupScreen from './containers/SignupScreen';

import routesNames from './lib/constants/routes';


const appRoutes = {
  [routesNames.Home]: {
    screen: LandingScreen,
  },
  [routesNames.MapScreen]: {
    screen: MapScreen,
  },
};

const authRoutes = {
  [routesNames.Login]: {
    screen: LoginScreen,
  },
  [routesNames.Signup]: {
    screen: SignupScreen,
  }
}

const AppStack = TabNavigator(appRoutes);
const AuthStack = TabNavigator(authRoutes);
const AppNavigator = SwitchNavigator({
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Auth',
  }
);

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
