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

const INIT_REGION = {
  latitude: 45.51,
  longitude: -122.68,
  latitudeDelta: .05,
  longitudeDelta: .05
}


class MapScreen extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      pins: [
        { id: 0,
          location: {
            longitude: -122.68,
            latitude: 45.51
          }
        },
        { id: 1,
          location: {
            longitude: -122.681,
            latitude: 45.511
          }
        },
        { id: 2,
          location: {
            longitude: -122.682,
            latitude: 45.512
          }
        }
      ]
    }
    this.renderMarker = this.renderMarker.bind(this)
    this.renderCluster = this.renderCluster.bind(this)
  }

  renderCluster = (cluster, onPress) => {
    const pointCount = cluster.pointCount,
          coordinate = cluster.coordinate,
          clusterId = cluster.clusterId

    // use pointCount to calculate cluster size scaling
    // and apply it to "style" prop below

    // eventually get clustered points by using
    // underlying SuperCluster instance
    // Methods ref: https://github.com/mapbox/supercluster
    // const clusteringEngine = this.map.getClusteringEngine(),
    //       clusteredPoints = clusteringEngine.getLeaves(clusterId, 100)

    return (
      <Marker identifier={`cluster-${clusterId}`} coordinate={coordinate} onPress={onPress}>
        <View style={styles.clusterContainer}>
          <Text style={styles.clusterText}>
            {pointCount}
          </Text>
        </View>
      </Marker>
    )
  }

  renderMarker = (pin) => {
    return (
      <Marker identifier={`pin-${pin.id}`} key={pin.id} coordinate={pin.location} />
    )
  }

  render() {

    const {height, width} = Dimensions.get('window');

    return (
      <ClusteredMapView
          style={{flex: 1}}
          data={this.state.pins}
          initialRegion={INIT_REGION}
          radius={ 40 }
          renderMarker={this.renderMarker}
          renderCluster={this.renderCluster} />
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
