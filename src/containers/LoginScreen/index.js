import React from 'react';
import { View, Dimensions, Text, ImageBackground, Button } from 'react-native';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ActionCreators from '../../actions/index'
import styles from './styles'

class LoginScreen extends React.Component {

  constructor(props){
    super(props)
  }
  render() {

    const {height, width} = Dimensions.get('window');

    return (
      <View style={styles.container}>
        <Text>Login</Text>
      </View>
    );
  }
}

LoginScreen.defaultProps = {

};

LoginScreen.propTypes = {

};


function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(store) {
  return { };
}


export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);
