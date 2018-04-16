import React from 'react';
import { View, Dimensions, Text, TextInput, ImageBackground, Button } from 'react-native';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Marker, Callout } from 'react-native-maps';

import ActionCreators from '../../actions/index';
import getUserData from '../../selectors/userData';
import styles from './styles';

class AddMarker extends React.Component {

  constructor(props){
    super(props)
  }

  render() {
    console.log("render");
    return (
      <ClusteredAddMarker
        {...this.props}
        style={{flex: 1}}
        renderMarker={this.renderMarker}
        renderCluster={this.renderCluster} />
    );
  }
}

AddMarker.defaultProps = {

};

AddMarker.propTypes = {

};

export default AddMarker;
