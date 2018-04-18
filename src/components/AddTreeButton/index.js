import React from 'react';
import { Button } from 'react-native';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ActionCreators from '../../actions/index';
import getUserData from '../../selectors/userData';
import getAddMarker from '../../selectors/addMarker';
import styles from './styles';

class AddTreeButton extends React.Component {

  constructor(props) {
    super(props)
  }

  addTreeMarker() {
    this.props.showAddTreeModal();
    this.props.hideAddMarker();
  }

  render() {
    return(
      <Button
        title={(this.props.addMarker.visible) ? "Create Tree at Marker" : "Add Tree"}
        onPress={(e) => {(this.props.addMarker.visible) ?  this.addTreeMarker() : this.props.showAddMarker()}} />
    );
  }
}

AddTreeButton.defaultProps = {
  addMarker: {},
  userData: {},
  showAddMarker: () => {},
  hideAddMarker: () => {},
  showAddTreeModal: () => {},
};

AddTreeButton.propTypes = {
  addMarker: PropTypes.object,
  userData: PropTypes.object,
  showAddMarker: PropTypes.func,
  hideAddMarker: PropTypes.func,
  showAddTreeModal: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(store) {
  return { addMarker: getAddMarker(store), userData: getUserData(store) };
}


export default connect(mapStateToProps, mapDispatchToProps)(AddTreeButton);
