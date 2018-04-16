import React from 'react';
import { View, Dimensions, Text, TextInput, ImageBackground, Button } from 'react-native';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import ClusteredMapView from 'react-native-maps-super-cluster';
import { Marker, Callout } from 'react-native-maps';

import ActionCreators from '../../actions/index';
import getUserData from '../../selectors/userData';
import styles from './styles';

class MapView extends React.Component {

  constructor(props){
    super(props)
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

  render() {
    return (
      <ClusteredMapView
        {...this.props}
        style={{flex: 1}}
        renderMarker={this.renderMarker}
        renderCluster={this.renderCluster}>
        {...this.props.children}
      </ClusteredMapView>
    );
  }
}

MapView.defaultProps = {

};

MapView.propTypes = {

};

export default MapView;
