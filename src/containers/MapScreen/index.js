import React from 'react';
import { View, Dimensions, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ClusteredMapView from 'react-native-maps-super-cluster'

import ActionCreators from '../../actions/index'
import getViewCoords from '../../selectors/viewCoords';
import styles from './styles'

class MapScreen extends React.Component {

  render() {

    const {height, width} = Dimensions.get('window');

    return (
      <View style={styles.container}>
        <MapView
          style={{height: height, width: width, flex: 1}}
          showsUserLocation={true}
          region={this.props.viewCoords}>
          <Marker coordinate={{longitude: -122.68, latitude: 45.51}}/>
          <Marker coordinate={{longitude: -122.69, latitude: 45.52}}/>
        </MapView>
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
