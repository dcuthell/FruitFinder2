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

  constructor(props) {
    super(props)
  }

  dragStart(e) {
    console.log("Drag Start");
    console.log(e.nativeEvent);
  }

  dragEnd(e){
    console.log("Drag End");
    console.log(e.nativeEvent);
  }

  render() {
    console.log("3");
    return (
      <Marker
        draggable={true}
        onDragStart={this.dragStart}
        onDragEnd={this.dragEnd}
        { ...this.props } >
      </Marker>
    );
  }
}

AddMarker.defaultProps = {
  visibile : true,
};

AddMarker.propTypes = {
  visibile : PropTypes.bool,
};

export default AddMarker;
