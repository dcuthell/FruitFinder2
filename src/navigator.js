// First we do our imports
import React from 'react';
import { connect } from 'react-redux';
import { TabNavigator, addNavigationHelpers } from 'react-navigation';
import { Image } from 'react-native';

// We also import our own files
import MapScreen from 'containers/MapScreen';
// import ColorSelect from 'containers/ColorSelect';
import routesNames from 'lib/constants/routes';

// Here we define all of our routes
const routes = {
  [routesNames.MapScreen]: {
    screen: MapScreen,
    navigationOptions: {
      tabBarLabel: 'Map',
      tabBarIcon: () => (<Image
        source={require('./images/map.png')}
        style={{ height: 32, width: 32 }}
      />),
    },
  },
};

// We create our AppNavigator object with the routes passed in
const AppNavigator = TabNavigator(routes);

// We create our AppWithoutNavigationState which we will connect
const AppWithoutNavigationState = props => (
  <AppNavigator
    navigation={addNavigationHelpers({
      dispatch: props.dispatch,
      state: props.nav,
    })}
  />
);

// We map the store to props to use with connect
function mapNavToProps(store) {
  return store;
}
// We connect our store with the props for AppWithoutNavigationState
const AppWithNavigationState = connect(mapNavToProps)(AppWithoutNavigationState);

// Our navReducer will handle navigation change requests
const navReducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
};

// We export both AppWithNavigationState and navReducer as a single object to
// pass to App.js, where we will expand them again and use them individually.
export default { AppWithNavigationState, navReducer };
