import React from 'react';
import { View, Dimensions, Text, ImageBackground, Button } from 'react-native';
import { Marker, Callout } from 'react-native-maps';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ClusteredMapView from 'react-native-maps-super-cluster';

import MapView from '../../components/MapView/index';
import AddMarker from '../../components/AddMarker';
import AddTreeModal from '../../components/AddTreeModal';

import ActionCreators from '../../actions/index';
import getViewCoords from '../../selectors/viewCoords';
import getTreeList from '../../selectors/treeList';
import getAddMarker from '../../selectors/addMarker';
import getAddTreeModal from '../../selectors/addTreeModal';

import styles from './styles'

const INIT_REGION = {
  latitude: 45.51,
  longitude: -122.68,
  latitudeDelta: .05,
  longitudeDelta: .05
}


class MapScreen extends React.Component {

  constructor(props){
    super(props)
    this.props.fetchTreeList();
  }

  addTreeMarker() {
    this.props.showAddTreeModal();
    this.props.hideAddMarker();
  }

  render() {
    const {height, width} = Dimensions.get('window');
    const data = this.props.markers;
    return (
      <View style={{height: '100%', width: '100%'}}>
        <MapView
            showsUserLocation={true}
            data={this.props.markers}
            initialRegion={this.props.viewCoords}
            onRegionChangeComplete={(region) => {this.props.setViewCoords(region)}}
            radius={ 48 }>
            <AddMarker
              visible={this.props.addMarker.visible}
              coordinate={{
                latitude: this.props.viewCoords.latitude,
                longitude: this.props.viewCoords.longitude
            }}></AddMarker>
        </MapView>
        <AddTreeModal
          visible={this.props.addTreeModal.visible} />
        <Button
          title={(this.props.addMarker.visible) ? "Create Tree at Marker" : "Add Tree"}
          type={'standard'}
          onPress={(e) => {
            (this.props.addMarker.visible) ?  this.addTreeMarker() : this.props.showAddMarker()
          }}
        />
      </View>

    );
  }
}

MapScreen.defaultProps = {
  markers: [],
  viewCoords: {},
  addMarker: {},
  addTreeModal: {},
  setViewCoords: () => {},
  showAddMarker: () => {},
  hideAddMarker: () => {},
  showAddTreeModal: () => {},
  getTreeList: () => {},
};

MapScreen.propTypes = {
  markers: PropTypes.array,
  viewCoords: PropTypes.object,
  addMarker: PropTypes.object,
  addTreeModal: PropTypes.object,
  setViewCoords: PropTypes.func,
  showAddMarker: PropTypes.func,
  hideAddMarker: PropTypes.func,
  showAddTreeModal: PropTypes.func,
  getTreeList: PropTypes.func,
};


function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(store) {
  return { viewCoords: getViewCoords(store), markers: getTreeList(store), addMarker: getAddMarker(store), addTreeModal: getAddTreeModal(store) };
}


export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);
