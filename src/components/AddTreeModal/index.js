import React from 'react';
import { View, Modal, Text, TextInput, Button } from 'react-native';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ActionCreators from '../../actions/index';
import getAddMarker from '../../selectors/addMarker';
import getAddTreeModal from '../../selectors/addTreeModal';
import styles from './styles';

class AddTreeModal extends React.Component {

  constructor(props) {
    super(props)
  }

  submitTree(){
    const tree = { id: "300069", location: { longitude: this.props.addMarker.longitude, latitude: this.props.addMarker.latitude }, type: this.type, edible: this.edible, condition: this.condition, size: this.size};
    this.props.addTree(tree);
    this.props.hideAddTreeModal();
  }

  render() {
    if(this.props.addTreeModal.visible){
      return (
        <Modal
          animationType="slide"
          transparent={true}
          onRequestClose={() => {
            console.log('Modal has been closed.'); //Does this need to get hooked up???
          }}
          {...this.props} >
          <View style={styles.modalView}>
            <View>
              <Text>Please Enter Data For This Tree</Text>
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
      );
    }else{
      return null;
    }
  }
}

AddTreeModal.defaultProps = {
  visibile : true,
  addMarker: {},
  addTreeModal: {},
  hideAddTreeModal: () => {},
  addTree: () => {},
};

AddTreeModal.propTypes = {
  visibile : PropTypes.bool,
  addMarker: PropTypes.object,
  addTreeModal: PropTypes.object,
  hideAddTreeModal: PropTypes.func,
  addTree: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(store) {
  return { addMarker: getAddMarker(store), addTreeModal: getAddTreeModal(store) };
}


export default connect(mapStateToProps, mapDispatchToProps)(AddTreeModal);
