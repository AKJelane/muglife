/*global google*/
import React from 'react'
import PropTypes from 'prop-types'
import {Marker, InfoWindow} from 'react-google-maps'
import Info from "./Info";
import mugPath from '../assets/mug.png'

class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isInfoOpen: false};

    this.onToggleOpen = this.onToggleOpen.bind(this);
  }

  onToggleOpen() {
    this.setState({isInfoOpen: !this.state.isInfoOpen});
  }

  render() {
    const icon = { url: mugPath, scaledSize: new google.maps.Size(40, 40) };

    return (
      <Marker
        icon={icon}
        position={{lat: this.props.lat, lng: this.props.lng}}
        onClick={this.onToggleOpen}
      >
        {this.state.isInfoOpen &&
        <InfoWindow onCloseClick={this.onToggleOpen}>
          <Info name={this.props.name} discount={this.props.discount}/>
        </InfoWindow>}
      </Marker>
    );
  }
}

export default Location;

Location.propTypes = {
  name: PropTypes.string,
  lat: PropTypes.number,
  lng: PropTypes.number,
  discount: PropTypes.number
};