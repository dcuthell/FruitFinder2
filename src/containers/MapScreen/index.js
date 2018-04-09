import React from 'react';
import { View, Dimensions, Text, ImageBackground, Button } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ClusteredMapView from 'react-native-maps-super-cluster'

import ActionCreators from '../../actions/index'
import getViewCoords from '../../selectors/viewCoords';
import getTreeList from '../../selectors/treeList';
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
          },
          type: "FCUK",
          edible: "POITSOD",
          condition: "TERRIBLE",
          size: "YUGEE"
        },
        { id: 3,
          location: {
            longitude: -122.679,
            latitude: 45.509
          }
        },
        { id: 4,
          location: {
            longitude: -122.678,
            latitude: 45.508
          }
        },
        { id: 5,
          location: {
            longitude: -122.677,
            latitude: 45.507
          }
        }
      ]
    }
    this.renderMarker = this.renderMarker.bind(this)
    this.renderCluster = this.renderCluster.bind(this)
    this.props.fetchTreeList();
  }

  componentDidMount(){

  }

  renderCluster = (cluster, onPress) => {
    const pointCount = cluster.pointCount,
          coordinate = cluster.coordinate,
          clusterId = cluster.clusterId

    return (
      <Marker identifier={`cluster-${clusterId}`} coordinate={coordinate} onPress={onPress}>
        <View style={styles.clusterContainer}>
          <ImageBackground source={require('../../images/tree128.png')} style={styles.clusterImage}>
            <Text style={styles.clusterText}>
              {pointCount}
            </Text>
          </ImageBackground>
        </View>
      </Marker>
    )
  }

  renderMarker = (pin) => {
    return (
      <Marker identifier={`pin-${pin.id}`} key={pin.id} coordinate={pin.location} image={require('../../images/tree128.png')}>
        <Callout>
          <Text>Tree type: {pin.type}</Text>
          <Text>Fruit or Nut: {pin.edible}</Text>
          <Text>Condition: {pin.condition}</Text>
          <Text>Size: {pin.size}</Text>
        </Callout>
      </Marker>
    )
  }

  render() {

    const {height, width} = Dimensions.get('window');

    return (
      <View style={{height: '100%', width: '100%'}}>
        <ClusteredMapView
            style={{flex: 1}}
            showsUserLocation={true}
            data={(!this.props.markers.length) ? this.state.pins : this.props.markers}
            initialRegion={INIT_REGION}
            radius={ 48 }
            renderMarker={this.renderMarker}
            renderCluster={this.renderCluster} />
        <Button
          title={"Hey"}
          type={'standard'}
          onPress={() => {
            this.props.fetchTreeList();
          }}
        />
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
  getTreeList: () => {},
};

MapScreen.propTypes = {
  markers: PropTypes.array,
  viewCoords: PropTypes.object,
  setViewCoords: PropTypes.func,
  getTreeList: PropTypes.func,
};


function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(store) {
  return { viewCoords: getViewCoords(store), markers: getTreeList(store) };
}


export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);
