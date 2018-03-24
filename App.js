import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MapView, Location } from 'expo';

export default class App extends React.Component {

  componentWillMount(){
    Location.setApiKey("AIzaSyDgoaHkdwS4_OVB3hnh6OgKLqDp-AiWxV8");
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView style={{height: '100%', width: '100%'}} showsUserLocation={true}/>
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
