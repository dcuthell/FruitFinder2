import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import RootApp from './src/RootApp';

export default class App extends React.Component {

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
