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
    if(this.props.userData.userInfo.isAnonymous){
      this.props.logoutAnonymously();
    }
    return null;
  }

  render() {

    const displayName = (this.props.userData.userInfo !== null) ? "Welcome, " + this.props.userData.userInfo.displayName +"!" : "Loading...";
    if(this.props.userData.userInfo){
      return (
        <View style={styles.container}>
          <Text>{displayName}</Text>
          <Button
            title={"Sign Out"}
            onPress={(e) => {
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
