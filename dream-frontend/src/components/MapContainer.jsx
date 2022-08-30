import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
// InfoWindow,

import "../styles/contact.css";

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        className="map"
        initialCenter={{
          lat: 9.00543,
          lng: 38.69261,
        }}
        center={{
          lat: 40.854885,
          lng: -88.081807,
        }}
        
      >
        <Marker onClick={this.onMarkerClick} name={"Current location"} />

        {/* <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow> */}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.API_KEY,
})(MapContainer);
