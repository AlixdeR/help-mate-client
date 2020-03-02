import React, { Component } from 'react';
import { withRouter, Redirect } from "react-router-dom";
import APIHandler from "../../api/APIHandler";

import UserContext from '../../auth/UserContext';

export default class FormEditAd extends Component {
    constructor(props) {
        super(props)
        this.state = {
        msg: "",
        redirect: false,
        title: this.props.data.title,
        // recipient: "",
        categories: ["Bricolage", "Ménage", "Visites de courtoisie", "Courses"],
        category: this.props.data.category,
        description: this.props.data.description,
        adType: this.props.data.adType,
        street: this.props.data.address.street,
        zipCode: this.props.data.address.zipCode,
        city: this.props.data.address.city,
        availability: this.props.data.availability,
        id: this.props.id
    }}

    handleState = e => {
      if (e.target.type === 'radio') this.setState({adType: e.target.value})
      this.setState({ [e.target.name]: e.target.value });
    }

    

    submitEditForm = e => {
      console.log(this.state,"this is state")
      e.preventDefault();
      APIHandler.patch(`/ads/${this.state.id}`, 
      {
        title: this.state.title,
        category: this.state.category,
        description: this.state.description,
        availability: this.state.availability,
        adType: this.state.adType,
        address: {
            street: this.state.street,
            zipCode: this.state.zipCode,
            city: this.state.city,
        }
      })
    .then(apiRes => this.setState({redirect: true}))
    .catch(apiErr => this.setState({msg: <div className="msg-fail">Erreur! </div>}));
    };

    render() {
  
        return (

            <div>

                {this.state.redirect===true && <Redirect to="/annonces" />}

                {this.state.msg && this.state.msg}
                
                <form className="center-content" onSubmit={this.submitEditForm} onChange={this.handleState}>
                
                  <div className='field'>
                    <label className="label">Titre</label>
                    <input className="input" type="text" name="title" value={this.state.title} />
                  </div>

                  {this.state.adType==="demande" ? (
                  <div className='field'>
                    <label className="label">Type</label>
                    <label className="radio" htmlFor="demande">
                      <input type="radio" name="adType" value="demande" defaultChecked/>
                      Je demande de l'aide
                    </label> 
                    <label className="radio" htmlFor="demande">
                      <input type="radio" name="adType" value="service"/>
                      Je propose mon aide
                    </label>
                  </div>
                  ) : (
                  <div className='field'>
                    <label className="label">Type</label>
                    <label className="radio" htmlFor="demande">
                      <input type="radio" name="adType" value="demande"/>
                      Je demande de l'aide
                    </label> 
                    <label className="radio" htmlFor="demande">
                      <input type="radio" name="adType" value="service" defaultChecked/>
                      Je propose mon aide
                    </label>
                  </div>
                  )}
                  
                  <div className='field'>
                    <label className="label">Catégorie</label>
                    <div className="select">
                    <select className="input" name="category" defaultValue={this.state.category}>
                    <option defaultSelected>Choisir une catégorie</option>
                      {this.state.categories.map((category,i) => (<option key={i} value={category}>{category}</option>))};
                    </select>
                    </div>      
                  </div>
    
                  <div className='field'>
                    <label className="label">Description</label>
                    <textarea className="textarea" name="description" value={this.state.description}></textarea>
                  </div>

                  <div className='field'>
                    <label className="label">Disponibilité(s)</label>
                    <textarea className="textarea" name="availability" value={this.state.availability}/>
                  </div>

                  <div className='field'>
                    <label className="label">Localisation</label>
                    <input className="input" type="text" name="street" placeholder="Adresse (ne sera pas rendue publique dans l'annonce)"  defaultValue={this.state.street}/>
                    <input className="input" type="number" name="zipCode" placeholder="Code Postal" defaultValue={this.state.zipCode}/>
                    <input className="input" type="text" name="city" placeholder="Ville" defaultValue={this.state.city}/>
                  </div>

                  {/* <div className='field'>
                    <label className="label">Image</label>
                    <input className="input" type="file" name="image" accept="image/png, image/jpeg" value={this.state.image}/>
                  </div> */}

                    <button className="button is-primary is-rounded" type="submit">Modifier mon annonce</button>

                </form>

            </div>

)}}

