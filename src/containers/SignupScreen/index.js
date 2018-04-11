import React from 'react';
import { View, Dimensions, Text, ImageBackground, TextInput, Button } from 'react-native';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ActionCreators from '../../actions/index'
import styles from './styles'

class SignupScreen extends React.Component {

  constructor(props){
    super(props)
  }
  render() {

    const {height, width} = Dimensions.get('window');

    return (
      <View style={styles.container}>
        <Text>Sign Up</Text>
          <TextInput
            style={styles.input}
            placeholder="User Name"
            onChangeText={text => {this.userName = text}}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={text => {this.email = text.toLowerCase();}}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={text => {this.password = text.toLowerCase();}}
          />
          <Button
            title={"Sign Up"}
            type={'standard'}
            onPress={() => {
              this.props.signupWithEmail({email: this.email, password: this.password, userName: this.userName});
              this.props.navigation.navigate('Home');
            }}
          />
      </View>
    );
  }
}

SignupScreen.defaultProps = {
  signupWithEmail: () => {},
};

SignupScreen.propTypes = {
  signupWithEmail: PropTypes.func,
};


function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(store) {
  return { };
}


export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen);
