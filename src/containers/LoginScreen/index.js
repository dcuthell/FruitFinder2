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
        <TextInput
          style={styles.input}
          placeholderTextColor='white'
          placeholder="User Email"
          onChangeText={text => {this.email = text.toLowerCase();}}
        />
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
