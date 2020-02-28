import React, { Component } from 'react';
import { withRouter, Redirect } from "react-router-dom";
import APIHandler from "../../api/APIHandler";

import "../../styles/form-ad.css";

import CurrentUser from "../user/CurrentUser";

export default class FormAd extends Component {
      state = {
        msg: "",
        title: "",
        // author: CurrentUser._id,
        recipient: "",
        categories: ["Bricolage", "Ménage", "Visites de courtoisie", "Courses"],
        category: "",
        description: "",
        adType: "",
        street: "",
        zipCode: 0,
        city: "",
        image: "",
        availability: ""
    }

    handleState = e => {
      // e.preventDefault();
      console.log(e.target.value)
      this.setState({ [e.target.name]: e.target.value });
    }

    submitForm = e => {
      e.preventDefault();
      console.log("submit ok");
      APIHandler.post("/ads", {
        title: this.state.title,
        // author: this.state.author,
        category: this.state.category,
        description: this.state.description,
        availability: this.state.availability,
        adType: this.state.adType,
        address: {
            street: this.state.street,
            zipCode: this.state.zipCode,
            city: this.state.city,
        },
        // image: this.state.image,
      })
      .then(apiRes => this.setState({msg: <div className="msg">OK</div> }))
      .catch(apiErr => console.log(apiErr))
      // .catch(apiErr => this.setState({msg: <div className="msg-fail">An error occured, try again!</div>}))
    };

    //this.props.history.push(`/profil/${this.state.author._id}/annonces`)
    //${this.state.author._id}

    render() {

        return (

            <div>

                {this.state.msg && this.state.msg}
                
                <form className="form" onSubmit={this.submitForm} onChange={this.handleState}>
                
                    <label className="label">Title</label>
                    <input className="input" type="text" name="title"/>

                    <label className="label">Category</label>
                    <select className="input" name="category">
                    <option defaultSelected>Choose Category</option>
                      {this.state.categories.map((category,i) => (<option key={i} value={category}>{category}</option>))};
                    </select>
    
                    <label className="label">Description</label>
                    <textarea className="input" name="description"></textarea>

                    <label className="label">Disponibilité(s)</label>
                    <input className="input" type="text" name="availability"/>

                    <label className="label">Type</label>
                    <label className="label" htmlFor="demande">Je demande de l'aide</label>
<<<<<<< HEAD
                    <input className="" type="radio" name="addType" value="demande"/>
                    <label className="label" htmlFor="demande">Je propose mon aide</label>
                    <input className="" type="radio" name="addType" value="service"/>
=======
                    <input className="input" type="radio" name="adType" value="demande" defaultChecked/>
                    <label className="label" htmlFor="demande">Je propose mon aide</label>
                    <input className="input" type="radio" name="adType" value="service"/>
>>>>>>> c2b77b42f66eb30850c09f356899a3ff74073cf6

                    <label className="label">Adresse</label>
                    <input className="input" type="text" name="street" placeholder="Adresse"/>
                    <input className="input" type="number" name="zipCode" placeholder="Code Postal"/>
                    <input className="input" type="text" name="city" placeholder="Ville"/>

                    {/* <label className="label">Image</label>
                    <input className="input" type="file" name="image" accept="image/png, image/jpeg"/> */}

                    <button className="btn" type="submit">Poster mon annonce</button>

                </form>

            </div>

)}}

