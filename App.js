import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'react-native-firebase';


import RootApp from './src/RootApp';

export default class App extends React.Component {

  render() {

    firebase.auth()
    .signInAnonymouslyAndRetrieveData()
    .then(credential => {
      if (credential) {
        console.log('default app user ->', credential.user.toJSON());
      }
    });


    return (
      <RootApp/>
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
