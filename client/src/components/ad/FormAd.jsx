import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { GoogleMap } from "@react-google-maps/api";
import APIHandler from "../../api/APIHandler";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { geocodeByAddress } from "react-google-places-autocomplete";
import UserContext from "../../auth/UserContext";

export default class FormAd extends Component {
  state = {
    msg: "",
    title: "",
    recipient: "",
    categories: ["Bricolage", "Ménage", "Visites de courtoisie", "Courses"],
    category: "",
    description: "",
    adType: "",
    street: "",
    zipCode: 0,
    city: "",
    image: "",
    availability: "",
    lat:null,
    lng:null
  };

  handleState = e => {
    if (e.target.type === "radio") this.setState({ adType: e.target.value });
    this.setState({ [e.target.name]: e.target.value });
  };

  submitForm = e => {
    e.preventDefault();
    const {street, zipCode, city} = this.state
    const addressStr = street + ", " + zipCode + ", " + city;
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: addressStr }, function(results, status) {
        if (status == "OK") {
          console.log(results, "this is results");
          const lat = results[0].geometry.location.lat();
          const lng = results[0].geometry.location.lng();
          this.setState({lng : lng, lat : lat})
          console.log(lat, lng);
        } else {
          alert(
            "Geocode was not successful for the following reason: " + status
          );
        }
    })
    
    APIHandler.post("/ads", {
      title: this.state.title,
      category: this.state.category,
      description: this.state.description,
      availability: this.state.availability,
      adType: this.state.adType,
      address: {
        street: this.state.street,
        zipCode: this.state.zipCode,
        city: this.state.city
      },
      image: this.state.image,
      lat : this.state.lat,
      lng : this.state.lng
    })
      .then(apiRes =>
        this.setState({ msg: <div className="msg-fail">Annonce créée!</div> })
      )
      .catch(apiErr =>
        this.setState({
          msg: <div className="msg-fail">An error occured, try again!</div>
        })
      );
  };


  render() {
    return (
      <div>
        {this.state.msg && this.state.msg}

        <form
          className="center-content"
          onSubmit={this.submitForm}
          onChange={this.handleState}
        >
          <div className="field">
            <label className="label">Titre</label>
            <input className="input" type="text" name="title" />
          </div>

          <div className="field">
            <label className="label">Type</label>
            <label className="radio" htmlFor="demande">
              <input type="radio" name="addType" value="demande" />
              Je demande de l'aide
            </label>
            <label className="radio" htmlFor="demande">
              <input type="radio" name="addType" value="service" />
              Je propose mon aide
            </label>
          </div>

          <div className="field">
            <label className="label">Catégorie</label>
            <div className="select">
              <select name="category">
                <option defaultSelected>Choisir une catégorie</option>
                {this.state.categories.map((category, i) => (
                  <option key={i} value={category}>
                    {category}
                  </option>
                ))}
                ;
              </select>
            </div>
          </div>

          <div className="field">
            <label className="label">Description</label>
            <textarea
              className="textarea"
              name="description"
              placeholder="Dites nous en plus sur votre annoce..."
            ></textarea>
          </div>

          <div className="field">
            <label className="label">Disponibilité(s)</label>
            <textarea
              className="textarea"
              name="availability"
              placeholder="A quelle fréquence? A quelle(s) date(s)?"
            />
          </div>

          <div className="field">
            <label className="label">Localisation</label>
            <input
              className="input"
              type="text"
              name="street"
              placeholder="Adresse (ne sera pas rendue publique dans l'annonce)"
            />
            
            <input
              className="input"
              type="number"
              name="zipCode"
              placeholder="Code Postal"
              id='yopzip'
            />
            <input
              className="input"
              type="text"
              name="city"
              placeholder="Ville"
              id='yopcity'
            />
          </div>

          <div className="field">
            <label className="label">Image</label>
            <input
              className="input"
              type="file"
              name="image"
              accept="image/png, image/jpeg"
            />
          </div>

          <button className="button is-primary is-rounded" type="submit">
            Poster mon annonce
          </button>
        </form>
      </div>
    );
  }
}
