import React, { Component } from "react";
import { GoogleMap } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";
// import { withScriptjs } from "react-google-maps";
import Geocode from "react-geocode";
class Map extends Component {

  render() {
  const mapCenter = 
  this.props.locations && this.props.locations.length !== 0?  {lat:this.props.locations[0][1],
    lng: this.props.locations[0][0]} : this.props.location ? {lat:this.props.location[1],
    lng: this.props.location[0]} : {lat : 48.8534, lng: 2.3488}
    return (
      <div>
        <GoogleMap
          id="circle-example"
          mapContainerStyle={{
            height: "400px",
            width: "500px"
          }}
          zoom={15}
          center={mapCenter}
        >
          {this.props.location && <Marker
            position={{
              lat: this.props.location[1],
              lng: this.props.location[0]
            }}
          />}
          {this.props.locations && 
          this.props.locations.map((location, i)=>(
            <Marker
            position={{
              lat: location[1],
              lng: location[0]
            }}
          />
          ))}
        </GoogleMap>
       
      </div>
    );
  }
}

export default Map;
