import React from 'react';
import { View, Dimensions, Text, ImageBackground, Button } from 'react-native';
import { Marker, Callout } from 'react-native-maps';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ClusteredMapView from 'react-native-maps-super-cluster';

import MapView from '../../components/MapView/index';
import AddMarker from '../../components/AddMarker';

import ActionCreators from '../../actions/index';
import getViewCoords from '../../selectors/viewCoords';
import getTreeList from '../../selectors/treeList';
import getAddMarker from '../../selectors/addMarker';
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
    console.log("fetchfire");
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
          <ImageBackground source={require('../../images/tree128.png')} style={styles.clusterImage} >
            <Text style={styles.clusterText}>
              {pointCount}
            </Text>
          </ImageBackground>
        </View>
      </Marker>
    )
  }

  renderMarker = (pin) => {
    // if(pin.id === "300069"){
    //   console.log("WOOOOO");
    // }
    // console.log("render for :" + pin.id);
    return (
      <Marker identifier={`pin-${pin.id}`} key={pin.id} coordinate={pin.location} image={require('../../images/tree128.png')}>
        <Callout>
          <Text>Tree type: {pin.type}</Text>
          <Text>Fruit or Nut: {pin.edible}</Text>
          <Text>Condition: {pin.condition}</Text>
          <Text>Size: {pin.size}</Text>
          <Text>Id: {pin.id}</Text>
        </Callout>
      </Marker>
    )
  }

// {longitudeDelta: 0.0002759322523928631, latitudeDelta: 0.00026995994027601, longitude: -122.67964219674468, latitude: 45.511035447478406}
// {longitude: -122.6796385, latitude: 45.51103467}

  render() {

    const {height, width} = Dimensions.get('window');
    const data = (!this.props.markers.length) ? this.state.pins : this.props.markers;
    const LatLng = this.props.addMarker;
    console.log(LatLng);
    return (
      <View style={{height: '100%', width: '100%'}}>
        <MapView
            showsUserLocation={true}
            data={this.props.markers}
            initialRegion={(this.props.viewCoords) ? this.props.viewCoords : INIT_REGION}
            onRegionChangeComplete={(region) => {this.props.setViewCoords(region); console.log(this.props);}}
            radius={ 48 }>
            <AddMarker coordinate={{
              longitude: -122.678,
              latitude: 45.508
            }}></AddMarker>
        </MapView>
        <Button
          title={"LogOut"}
          type={'standard'}
          onPress={() => {
            // this.props.addTree({ id: "300069", location: { longitude: -122.679246, latitude: 45.511596 }, type: "Dingleberry", edible: "nut", condition: "sweet", size: "Y"  });
            console.log(this.props.markers.length)
            console.log(this.props.viewCoords)
          }}
        />
      </View>

    );
  }
}

MapScreen.defaultProps = {
  markers: [],
  viewCoords: {},
  addMarker: {},
  setViewCoords: () => {},
  getTreeList: () => {},
};

MapScreen.propTypes = {
  markers: PropTypes.array,
  viewCoords: PropTypes.object,
  addMarker: PropTypes.object,
  setViewCoords: PropTypes.func,
  getTreeList: PropTypes.func,
};


function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(store) {
  return { viewCoords: getViewCoords(store), markers: getTreeList(store), addMarker: getAddMarker(store) };
}


export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);
