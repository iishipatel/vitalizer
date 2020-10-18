import { Map, GoogleApiWrapper } from "google-maps-react";
import React, { Component } from "react";

export class MapContainer extends Component {
  render() {
    const style = {
      width: "100%",
      height: "100%",
    };
    return (
      <Map
        google={this.props.google}
        initialCenter={{
          lat: 40.854885,
          lng: -88.081807,
        }}
        style={style}
        zoom={15}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDPifGd9DUuqb1ObIuqHzA7qqb-en8Hm7c",
})(MapContainer);
