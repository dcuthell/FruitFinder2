import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Location } from 'expo';
import MapView from 'react-native-map-clustering';
import { Marker } from 'react-native-maps';

export default class App extends React.Component {

  componentWillMount(){
    //Needed?
    Location.setApiKey("AIzaSyDgoaHkdwS4_OVB3hnh6OgKLqDp-AiWxV8");
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView style={{height: '100%', width: '100%'}}
        showsUserLocation={true}
        region={{
          latitude: 45.51,
          longitude: -122.68,
          latitudeDelta: .2,
          longitudeDelta: .2,
        }}>
          <Marker coordinate={{longitude: -122.68, latitude: 45.51}} />
          <Marker coordinate={{longitude: -122.66, latitude: 45.49}} />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
