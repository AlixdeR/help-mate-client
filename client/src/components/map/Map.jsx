import React, { Component } from "react";
import { GoogleMap } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";
// import { withScriptjs } from "react-google-maps";
import Geocode from "react-geocode";
class Map extends Component {
  state = {
    lat: null,
    lng: null
  };

  componentDidMount() {
    if (!this.props.address) return;
    const { street, zipCode, city } = this.props.address;
    const addressStr = street + " " + zipCode + " " + city;
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: addressStr }, function(results, status) {
      if (status == "OK") {
        console.log(results, "this is results");
        const lat = results[0].geometry.location.lat();
        const lng = results[0].geometry.location.lng();
        console.log(lat, lng);
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  }

  componentDidUpdate(prevProps) {
    console.log("updating");
    if (prevProps.address !== this.props.address) {
      console.log("icii");
      const { street, zipCode, city } = this.props.address;
      const addressStr = street + " " + zipCode + " " + city;
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: addressStr }, function(results, status) {
        if (status == "OK") {
          console.log(results, "this is results");
          const lat = results[0].geometry.location.lat();
          const lng = results[0].geometry.location.lng();
          console.log(lat, lng);
        } else {
          alert(
            "Geocode was not successful for the following reason: " + status
          );
        }
      });
    }
  }

  render() {

    return (
      <div>
        {/* <LoadScript
          id="script-loader"
          googleMapsApiKey="AIzaSyCcYVcCOHPydTieR4yFMz6Pq-vY-bQvVD8"
        > */}
        <GoogleMap
          id="circle-example"
          mapContainerStyle={{
            height: "400px",
            width: "800px"
          }}
          zoom={7}
          center={{
            lat: 37.772,
            lng: -122.214
          }}
        >
          <Marker
            position={{
              lat: 37.772,
              lng: -122.214
            }}
          />
        </GoogleMap>
       
      </div>
    );
  }
}

export default Map;
