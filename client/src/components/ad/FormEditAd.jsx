import React, { Component } from 'react';
import { withRouter, Redirect } from "react-router-dom";
import APIHandler from "../../api/APIHandler";

import UserContext from '../../auth/UserContext';

export default class FormEditAd extends Component {
    constructor(props) {
        super(props)
        this.state = {
        msg: "",
        title: this.props.data.title,
        recipient: "",
        categories: ["Bricolage", "Ménage", "Visites de courtoisie", "Courses"],
        category: this.props.data.category,
        description: this.props.data.description,
        adType: this.props.data.adType,
        address: { 
            street: this.props.data.street,
            zipCode: this.props.data.zipCode,
            city: this.props.data.city},
        image: this.props.data.image,
        availability: this.props.data.availability,
        id: this.props.id
    }}

    handleState = e => {
      if (e.target.type === 'radio') this.setState({adType: e.target.value})
      this.setState({ [e.target.name]: e.target.value });
    }

    submitEditForm = e => {
      e.preventDefault();
      APIHandler.patch(`/ads/${this.state.id}`, {
        title: this.state.title,
        category: this.state.category,
        description: this.state.description,
        availability: this.state.availability,
        adType: this.state.adType,
        address: {
            street: this.state.street,
            zipCode: this.state.zipCode,
            city: this.state.city,
        },
        image: this.state.image
      })
      .then(apiRes => this.setState({msg: <div className="msg-fail">Annonce modifiée!</div>}))
      .catch(apiErr => this.setState({msg: <div className="msg-fail">An error occured, try again!</div>}));
    };

    //${this.state.author._id}

    render() {
 console.log(this.props.data)
        return (

            <div>

                {this.state.msg && this.state.msg}
                
                <form className="center-content" onSubmit={this.submitEditForm} onChange={this.handleState}>
                
                  <div className='field'>
                    <label className="label">Title</label>
                    <input className="input" type="text" name="title" value={this.state.title} />
                  </div>

                  <div className='field'>
                    <label className="label">Category</label>
                    <div className='select'>
                    <select className="input" name="category">
                    <option defaultSelected>Choose Category</option>
                      {this.state.categories.map((category,i) => (<option key={i} value={this.state.category}>{category}</option>))};
                    </select>
                    </div>      
                  </div>
    
                  <div className='field'>
                    <label className="label">Description</label>
                    <textarea className="textarea" name="description" value={this.state.description}></textarea>
                  </div>

                  <div className='field'>
                    <label className="label">Disponibilité(s)</label>
                    <input className="textarea" type="text" name="availability" value={this.state.availability}/>
                  </div>

                  
                  <div className='field'>
                    <label className="label">Type</label>
                    <label className="radio" htmlFor="demande">
                      <input type="radio" name="addType" value="demande"/>
                      Je demande de l'aide
                    </label>
                    <label className="radio" htmlFor="demande">
                      <input type="radio" name="addType" value="service"/>
                      Je propose mon aide
                    </label>
                  </div>

                  <div className='field'>
                    <label className="label">Localisation</label>
                    <input className="input" type="text" name="street" placeholder="Adresse" value={this.state.address.street}/>
                    <input className="input" type="number" name="zipCode" placeholder="Code Postal" value={this.state.address.zipCode}/>
                    <input className="input" type="text" name="city" placeholder="Ville" value={this.state.address.city}/>
                  </div>

                  <div className='field'>
                    <label className="label">Image</label>
                    <input className="input" type="file" name="image" accept="image/png, image/jpeg" value={this.state.image}/>
                  </div>

                    <button className="button is-primary is-rounded" type="submit">Modifier mon annonce</button>

                </form>

            </div>

)}}

