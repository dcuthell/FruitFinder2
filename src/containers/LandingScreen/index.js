import React from 'react';
import { View, Dimensions, Text, ImageBackground, Button } from 'react-native';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ActionCreators from '../../actions/index';
import getUserData from '../../selectors/userData';
import styles from './styles';

class LandingScreen extends React.Component {

  constructor(props){
    super(props)
  }
  render() {
    const displayName = (this.props.userData.user !== undefined) ? this.props.userData.user['_user']['displayName'] : "Default Name";

    const {height, width} = Dimensions.get('window');

    return (
      <View style={styles.container}>
        <Text>{displayName}</Text>
      </View>
    );
  }
}

LandingScreen.defaultProps = {
  userData: {},
};

LandingScreen.propTypes = {
  userData: PropTypes.object,
};


function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(store) {
  return { userData : getUserData(store) };
}


export default connect(mapStateToProps, mapDispatchToProps)(LandingScreen);
