

import React, { Component } from 'react';
import { Provider } from 'react-redux';


import getStore from './store';
import navigator from './navigator';

const { navReducer, AppWithNavigationState } = navigator;


export default class RootApp extends Component {

  render() {
    return (
      <Provider store={this.props.store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

RootApp.defaultProps = {
  store: getStore(navReducer),
};
