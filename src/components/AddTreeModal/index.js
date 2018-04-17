import React from 'react';
import { View, Dimensions, Modal, Text, TextInput, TouchableHighlight, ImageBackground, Button } from 'react-native';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ActionCreators from '../../actions/index';
import getUserData from '../../selectors/userData';
import getAddMarker from '../../selectors/addMarker';
import styles from './styles';

class AddTreeModal extends React.Component {

  constructor(props) {
    super(props)
  }

  submitTree(){
    const tree = { id: "300069", location: { longitude: this.props.addMarker.longitude, latitude: this.props.addMarker.latitude }, type: this.type, edible: this.edible, condition: this.condition, size: this.size};
    console.log(tree);
    this.props.addTree(tree);
    this.props.hideAddTreeModal();
  }

  render() {
    console.log(this.props);
    if(this.props.visible){
      return (
        <View style={{height: '50%'}}>
          <Modal
            animationType="slide"
            transparent={false}
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
                  placeholder="Type"
                  onChangeText={text => {this.type = text.toLowerCase();}}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Edible"
                  onChangeText={text => {this.edible = text.toLowerCase();}}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Condition"
                  onChangeText={text => {this.condition = text.toLowerCase();}}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Size"
                  onChangeText={text => {this.size = text.toUpperCase();}}
                />
                <Button
                  title={"Submit Tree Report"}
                  type={'standard'}
                  onPress={(e) => {
                    (this.type && this.edible && this.condition && this.size) ? this.submitTree() : console.log("not done filling out")
                  }}
                />
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
  addMarker: {},
  hideAddTreeModal: () => {},
  addTree: () => {},
};

AddTreeModal.propTypes = {
  visibile : PropTypes.bool,
  type: PropTypes.string,
  edible: PropTypes.string,
  condition: PropTypes.string,
  size: PropTypes.string,
  addMarker: PropTypes.object,
  hideAddTreeModal: PropTypes.func,
  addTree: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(store) {
  return { addMarker: getAddMarker(store) };
}


export default connect(mapStateToProps, mapDispatchToProps)(AddTreeModal);
