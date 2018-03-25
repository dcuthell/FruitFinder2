import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Location } from 'expo';
import MapView from 'react-native-map-clustering';
import { Marker } from 'react-native-maps';

import RootApp from './src/RootApp';

export default class App extends React.Component {

  componentWillMount(){
    //Needed?
    Location.setApiKey("AIzaSyDgoaHkdwS4_OVB3hnh6OgKLqDp-AiWxV8");
  }

  render() {
    return (
      <View style={styles.container}>
        <RootApp/>
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
