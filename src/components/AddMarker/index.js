import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Marker } from 'react-native-maps';

import ActionCreators from '../../actions/index';
import getAddMarker from '../../selectors/addMarker';
import styles from './styles';

class AddMarker extends React.Component {

  constructor(props) {
    super(props)
    this.dragEnd = this.dragEnd.bind(this);
  }

  dragStart(e) {
  }

  dragEnd(e){
    this.props.setAddMarker({visible: true, latitude: e.nativeEvent.coordinate.latitude, longitude: e.nativeEvent.coordinate.longitude});
  }

  render() {
    if(this.props.addMarker.visible){
      return (
        <Marker
          coordinate={{
            longitude: this.props.addMarker.longitude,
            latitude: this.props.addMarker.latitude}}
          draggable={true}
          onDragStart={this.dragStart}
          onDragEnd={this.dragEnd}
          { ...this.props } >
        </Marker>
      );
    }else{
      return null;
    }
  }
}

AddMarker.defaultProps = {
  addMarker : {},
  setAddMarker : () => {},
};

AddMarker.propTypes = {
  addMarker: PropTypes.object,
  setAddMarker: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(store) {
  return { addMarker: getAddMarker(store) };
}


export default connect(mapStateToProps, mapDispatchToProps)(AddMarker);
