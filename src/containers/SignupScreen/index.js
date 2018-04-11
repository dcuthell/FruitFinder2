import React from 'react';
import { View, Dimensions, Text, ImageBackground, Button } from 'react-native';
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
          <Button
            title={"Sign Up"}
            type={'standard'}
            onPress={() => {
              console.log("hey");
              this.props.signupWithEmail({email: 'mike@jones.com', password: 'mikejones', userName: 'Mike Jones'});
              // this.props.navigation.navigate('Home');
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
