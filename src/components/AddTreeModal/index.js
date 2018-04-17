import React from 'react';
import { View, Dimensions, Modal, Text, TextInput, TouchableHighlight, ImageBackground, Button } from 'react-native';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ActionCreators from '../../actions/index';
import getUserData from '../../selectors/userData';
import styles from './styles';

class AddTreeModal extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    if(this.props.visible){
      return (
        <View style={styles.modalview}>
          <Modal
            animationType="slide"
            transparent={true}
            onRequestClose={() => {
              console.log('Modal has been closed.');
            }}
            presentationStyle={'formSheet'}
            {...this.props}
            >
            <View style={{flex: 1, margin: 60}}>
              <View>
                <Text>Hello World!</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  onChangeText={text => {this.password = text.toLowerCase();}}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  onChangeText={text => {this.password = text.toLowerCase();}}
                />
                <TouchableHighlight
                  onPress={() => {
                    console.log("PRess")
                  }}>
                  <Text>Hide Modal</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
        </View>
      );
    }else{
      return null;
    }
  }
}

AddTreeModal.defaultProps = {
  visibile : true,
  type: null,
  edible: null,
  condition: null,
  size: null,
  setAddTreeModal: () => {},
};

AddTreeModal.propTypes = {
  visibile : PropTypes.bool,
  type: PropTypes.string,
  edible: PropTypes.string,
  condition: PropTypes.string,
  size: PropTypes.string,
  setAddTreeModal: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(store) {
  return { };
}


export default connect(mapStateToProps, mapDispatchToProps)(AddTreeModal);
