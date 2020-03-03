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
        redirect: false,
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
        lng:null,
        lat:null,
    }

    handleState = e => {
      if (e.target.name === "image") return
      if (e.target.type === 'radio') this.setState({adType: e.target.value})
      this.setState({ [e.target.name]: e.target.value });
    }

    handleFile = e => {
      this.setState({ image: e.target.files[0] });
    }

    submitForm = e => {
      e.preventDefault();
      const {street, zipCode, city} = this.state
      const addressStr = street + ", " + zipCode + ", " + city;
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: addressStr }, (results, status)=> {
        if (status == "OK") {
          console.log(results, "this is results");
          const lat = results[0].geometry.location.lat();
          const lng = results[0].geometry.location.lng();
          this.setState({lng : lng, lat : lat})
          console.log(lat, lng);
          const fd = new FormData();
          fd.append("image", this.state.image);
          fd.append("title", this.state.title);
          fd.append("category", this.state.category);
          fd.append("description", this.state.description);
          fd.append("availability", this.state.availability);
          fd.append("adType", this.state.adType);
          fd.append("street", this.state.street);
          fd.append("zipCode", this.state.zipCode);
          fd.append("city", this.state.city);
          fd.append("lng", this.state.lng);
          fd.append("lat", this.state.lat);
            APIHandler
            .post("/ads", fd)
            .then(apiRes => this.setState({redirect: true}))
            .catch(apiErr => this.setState({msg: <div className="msg-fail">Erreur!</div>}));
        } else {
          alert(
            "Geocode was not successful for the following reason: " + status
          );
        }
    })
    };

    render() {
        return (
            <div>

                {this.state.redirect===true && <Redirect to="/annonces" />}   

                {this.state.msg && this.state.msg}
                
                <form className="center-content" onSubmit={this.submitForm} onChange={this.handleState}>

                  <div className='field'>
                    <label className="label">Titre</label>
                    <input className="input" type="text" name="title"/>
                  </div>
                
                  <div className='field'>
                    <label className="label">Type</label>
                    <label className="radio" htmlFor="demande">
                      <input type="radio" name="adType" value="demande"/>
                      Je demande de l'aide
                    </label>
                    <label className="radio" htmlFor="demande">
                      <input type="radio" name="adType" value="service"/>
                      Je propose mon aide
                    </label>
                  </div>

                  <div className='field'>
                    <label className="label">Catégorie</label>
                    <div className='select'>
                      <select name="category">
                      <option defaultSelected>Choisir une catégorie</option>
                        {this.state.categories.map((category,i) => (<option key={i} value={category}>{category}</option>))};
                      </select>
                    </div>
                  </div>

                  <div className='field'>
                    <label className="label">Description</label>
                    <textarea className="textarea" name="description" placeholder="Dites nous en plus sur votre annoce..."></textarea>
                  </div>

                  <div className='field'>
                    <label className="label">Disponibilité(s)</label>
                    <textarea className="textarea" name="availability" placeholder="A quelle fréquence? A quelle(s) date(s)?"/>
                  </div>

                  <div className='field'>
                    <label className="label">Localisation</label>
                    <input className="input" type="text" name="street" placeholder="Adresse (ne sera pas rendue publique dans l'annonce)"/>
                    <input className="input" type="number" name="zipCode" placeholder="Code Postal"/>
                    <input className="input" type="text" name="city" placeholder="Ville"/>
                  </div>

                  <div className='field'>
                    <label className="label">Image</label>
                    <input onChange={this.handleFile} className="input" type="file" name="image"/>
                  </div>

                    <button className="button is-primary is-rounded" type="submit">Poster mon annonce</button>

                </form>

            </div>

)}}
