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
    this.dragEnd = this.dragEnd.bind(this);
  }

  dragStart(e) {
  }

  dragEnd(e){
    this.props.setAddMarker({latitude: e.nativeEvent.coordinate.latitude, longitude: e.nativeEvent.coordinate.longitude});
  }

  render() {
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
  setAddMarker : () => {},
};

AddMarker.propTypes = {
  visibile : PropTypes.bool,
  setAddMarker: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(store) {
  return { };
}


export default connect(mapStateToProps, mapDispatchToProps)(AddMarker);
