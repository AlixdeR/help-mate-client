import React, { Component } from 'react';
import { withRouter, Redirect } from "react-router-dom";
import APIHandler from "../../api/APIHandler";

import "../../styles/form-ad.css";

import CurrentUser from "../user/CurrentUser";

export default class FormAd extends Component {
      state = {
        msg: "",
        title: "",
        author: CurrentUser,
        recipient: "",
        categories: [],
        category: "",
        description: "",
        addType: "",
        street: "",
        zipCode: 0,
        city: "",
        image: "",
        availability: ""
    }

    componentDidMount = () => {
      APIHandler.get("/ads")
      .then(apiRes => {
      console.log(apiRes.data.category.enum);
      this.setState({categories: apiRes.data.category.enum})
      })
      .catch(apiErr => this.setState(apiErr));
    }
    

    handleState = e => {
      e.preventDefault();
      console.log(e.target.value);
      this.setState({ [e.target.name]: e.target.value });
    }

    handleCheckbox = e => {
      this.setState({addType: e.target.checked})
    }

    submitForm = e => {
      e.preventDefault();
      APIHandler.post(`/ads/${this.state.author._id}`, {
        title: this.state.title,
        author: this.state.author,
        category: this.state.category,
        description: this.state.description,
        availability: this.state.availability,
        addType: this.state.addType,
        adress: {
            street: this.state.adress.street,
            zipCode: this.state.adress.zipCode,
            city: this.state.adress.city,
        },
        image: this.state.image,
        availability: this.state.availability
      })
      .then(apiRes => this.props.history.push(`/profil/${this.state.author._id}/annonces`)
      .catch(apiErr => this.setState({msg: <div className="msg-fail">An error occured, try again!</div>}))
    )};


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
                    <input className="input" type="radio" name="addType" value="demande" onClick={this.handleCheckbox}/>
                    <label htmlFor="demande">Je demande de l'aide</label>
                    <input className="input" type="radio" name="addType" value="service" onClick={this.handleCheckbox}/>
                    <label htmlFor="demande">Je propose mon aide</label>

                    <label className="label">Adresse</label>
                    <input className="input" type="text" name="street" placeholder="Adresse"/>
                    <input className="input" type="number" name="zipCode" placeholder="Code Postal"/>
                    <input className="input" type="text" name="city" placeholder="Ville"/>

                    <label className="label">Image</label>
                    <input className="input" type="file" name="image" accept="image/png, image/jpeg"/>

                    <button className="btn" type="submit">Poster mon annonce</button>

                </form>

            </div>

)}}

