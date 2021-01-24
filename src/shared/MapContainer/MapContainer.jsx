import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import Geocode from "react-geocode";


const mapStyles = {
  position: 'absolute',
  width: '80%',
  height: '95%'
};

export class MapContainer extends Component {
  state = {
      showingInfoWindow: false,  // Hides or shows the InfoWindow
      activeMarker: {},          // Shows the active marker upon click
      selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
    };
    onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  constructor(props) {
    super(props);

    
  

    // this.state = {
    //   stores: [{latitude: 44.22805, longitude: -76.49095},
    //           {latitude: 44.23241, longitude: -76.50401},
    //           {latitude: 44.22986, longitude: -76.49712}]
    // }
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return <Marker key={index} id={index} position={{
       lat: store.latitude,
       lng: store.longitude
     }}
     onClick={() => (this.props.navToOwner())} />
     
    })
  }



  render() {
    return (
        <Map
          google={this.props.google}
          zoom={15}
          style={mapStyles}
          initialCenter={{ lat: 44.22986, lng: -76.49712}
          
        }
        >
        <Marker
          onClick={this.onMarkerClick}
          name={'Current Location'}
          
        />
        <Marker
          onClick={this.onMarkerClick}
          name={'The Meat Factory'}
          position={{
            lat: 44.23241, lng: -76.50401
          }}
        />
        <Marker
          onClick={this.state.showingInfoWindow ? this.props.navToDashboard() : this.onMarkerClick}
          name={'Ronnie\'s Palace'}
          position={{
            lat: 44.22805, lng: -76.49095
          }}
        />
        <InfoWindow
          onClick = {()  => this.props.navToDashBoard()}
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          

          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
        </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBtsxwMSwAtN-mjTWsZ-3YyDmQMUiJZVfU'
})(MapContainer);