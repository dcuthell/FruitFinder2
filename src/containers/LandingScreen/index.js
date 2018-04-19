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

    // this.handlePress = this.handlePress.bind(this);

  }

  handlePress () {
    if(this.props.userData.authType === 'anonymous'){
      this.props.logoutAnonymously();
    }
    if(this.props.userData.authType === 'email'){
      this.props.logoutAnonymously();
      // this.props.logoutWithEmail();
    }
    if(this.props.userData.authType === 'google'){
      this.props.logoutAnonymously();
      // this.props.logoutWithGoogle();
    }
    this.props.navigation.navigate('Auth');
  }

  render() {

    console.log("Home")
    const displayName = (this.props.userData.userInfo !== null) ? "Welcome, " + this.props.userData.userInfo.displayName +"!" : "Loading...";
    if(this.props.userData.userInfo){
      return (
        <View style={styles.container}>
          <Text>{displayName}</Text>
          <Button
            title={"Sign Out"}
            onPress={(e) => {
              console.log(this.props.userData);
              this.handlePress();
              console.log(this.props.userData);}} />
        </View>
      );
    }else{
      return null;
    }
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
