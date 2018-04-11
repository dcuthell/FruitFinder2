import React from 'react';
import { View, Dimensions, Text, TextInput, ImageBackground, Button } from 'react-native';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';

import ActionCreators from '../../actions/index';
import getUserData from '../../selectors/userData';
import styles from './styles';

class LoginScreen extends React.Component {

  constructor(props){
    super(props)
  }
  render() {

    const {height, width} = Dimensions.get('window');
    return (
      <View style={styles.container}>
        <Text>Login</Text>
        <Button
          title={"Sign In Anonymously"}
          style={styles.button}
          type={'standard'}
          onPress={() => {
            console.log
            this.props.loginAnonymously();
            this.props.navigation.navigate('Home');
          }}
        />
        <Text>OR</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={text => {this.email = text.toLowerCase();}}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={text => {this.email = text.toLowerCase();}}
        />
        <Button
          title={"Sign In With Email"}
          style={styles.button}
          type={'standard'}
          onPress={() => {
            this.props.loginWithEmail({ email: 'bob@jones.com', password: 'bobjones' },);
            this.props.navigation.navigate('Map View');
          }}
        />
        <Text>OR</Text>
        <GoogleSigninButton
          style={{width: 312, height: 48}}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={() => {console.log(this.props); this.props.loginWithGoogle(); this.props.navigation.navigate('Home');}}/>
      </View>
    );
  }
}

LoginScreen.defaultProps = {
  loginWithGoogle: () => {},
  loginAnonymously: () => {},
  loginWithEmail: () => {},
  userData: {},
};

LoginScreen.propTypes = {
  loginWithGoogle: PropTypes.func,
  userData: PropTypes.object,
};


function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(store) {
  return { userData : getUserData(store) };
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
