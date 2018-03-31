import React from 'react';
import { View, Dimensions, Text } from 'react-native';
import { Marker, MapView } from 'react-native-maps';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ActionCreators from '../../actions/index'
import getViewCoords from '../../selectors/viewCoords';
import styles from './styles'

class MapScreen extends React.Component {

  render() {

    const {height, width} = Dimensions.get('window');

    return (
      <View style={styles.container}>
        <Text>Hello</Text>
      </View>
    );
  }
}

MapScreen.defaultProps = {
  markers: [],
  viewCoords: {
    latitude: 45.5231,
    longitude: -132.68,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  },
  setViewCoords: () => {},
};

MapScreen.propTypes = {
  markers: PropTypes.array,
  viewCoords: PropTypes.object,
  setViewCoords: PropTypes.func,
};


function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(store) {
  return { viewCoords: getViewCoords(store) };
}


export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);
