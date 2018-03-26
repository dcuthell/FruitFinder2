import React from 'react';
import { View, Dimensions, Text } from 'react-native';
import { Location } from 'expo';
import MapView from 'react-native-map-clustering';
import { Marker } from 'react-native-maps';

import styles from './styles'

export default class App extends React.Component {

  componentWillMount(){
    //Needed?
    Location.setApiKey("AIzaSyDgoaHkdwS4_OVB3hnh6OgKLqDp-AiWxV8");
  }

  render() {

    const {height, width} = Dimensions.get('window');

    return (
      <View style={styles.container}>
        <MapView
          style={{height: height, width: width, flex: 1}}
          showsUserLocation={true}
          region={{
            latitude: 45.51,
            longitude: -122.68,
            latitudeDelta: .2,
            longitudeDelta: .2,}}>
          <Marker coordinate={{longitude: -122.68, latitude: 45.51}} />
          <Marker coordinate={{longitude: -122.66, latitude: 45.49}} />
        </MapView>
      </View>
    );
  }
}
