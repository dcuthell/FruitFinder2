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
  latitude: 41.8962667,
  longitude: 11.3340056,
  latitudeDelta: 12,
  longitudeDelta: 12
}


class MapScreen extends React.Component {

  renderCluster = (cluster, onPress) => {
    const pointCount = cluster.pointCount,
          coordinate = cluster.coordinate,
          clusterId = cluster.clusterId

    // use pointCount to calculate cluster size scaling
    // and apply it to "style" prop below

    // eventually get clustered points by using
    // underlying SuperCluster instance
    // Methods ref: https://github.com/mapbox/supercluster
    const clusteringEngine = this.map.getClusteringEngine(),
          clusteredPoints = clusteringEngine.getLeaves(clusterId, 100)

    return (
      <Marker coordinate={coordinate} onPress={onPress}>
        <View style={styles.myClusterStyle}>
          <Text style={styles.myClusterTextStyle}>
            {pointCount}
          </Text>
        </View>
        {
          /*
            Eventually use <Callout /> to
            show clustered point thumbs, i.e.:
            <Callout>
              <ScrollView>
                {
                  clusteredPoints.map(p => (
                    <Image source={p.image}>
                  ))
                }
              </ScrollView>
            </Callout>

            IMPORTANT: be aware that Marker's onPress event isn't really consistent when using Callout.
           */
        }
      </Marker>
    )
  }

  renderMarker = (data) => <Marker key={data.id || Math.random()} coordinate={data.location} />

  render() {

    const {height, width} = Dimensions.get('window');

    return (
      <ClusteredMapView
          style={{flex: 1}}
          data={this.state.data}
          initialRegion={INIT_REGION}
          ref={(r) => { this.map = r }}
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
