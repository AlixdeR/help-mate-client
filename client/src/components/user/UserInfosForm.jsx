import React, { useState, useEffect}from 'react'
import { withRouter } from "react-router-dom";
import Avatar from './Avatar'
import apiHandler from '../../api/APIHandler'

function UserInfosForm({mode = 'create', user, history, match}) {
    const [formValues, setFormValues] = useState({});

    function handleChange(event) {
        if (event.target.name === "image") return;
        let value =
          event.target.type === "checkbox"
            ? event.target.checked
            : event.target.value;
        setFormValues({
          ...formValues,
          [event.target.name]: value
        });
      }
    
const formHandler = e => {
        e.preventDefault();
        const {username, name, lastName, description, email, phone, gender, password} = formValues;
        const fd = new FormData();
        // fd.append("avatar", avatar);
        fd.append("username", username);
        fd.append("description", description);
        fd.append("name", name);
        fd.append("lastName", lastName);
        fd.append("password", password);
        fd.append("phone", phone);
        fd.append("email", email);
        fd.append("gender", gender);
        apiHandler.post(`/signup/`, fd)
        .then(apiRes => history.push(`/`))
      }
 
    return (
        <div>
            {/* <Avatar/> */}
            <form  onSubmit={formHandler} onChange={handleChange} className='form' encType="multipart/form-data">
                    <div className='field'>
                      <label className='label' htmlFor="name">Pseudo</label>
                      <input className='input' name="username" type ="text" id="username" placeholder="Ex : Jojo du 52" defaultValue={user && user.username} required/>
                    </div>
                    <div className='field'>
                      <label className='label' htmlFor="lastName">Nom</label>
                      <input className='input' type="text" name="lastName" id="lastName" placeholder="" defaultValue={user && user.lastName} required/>
                    </div>
                    <div className='field'>
                      <label className='label' htmlFor="price">Prénom</label>
                      <input className='input' type="text" name="name" id="name" placeholder="" defaultValue={user && user.name} required/>
                    </div>
                    <div className="field">
                    <label className='label' htmlFor="status">Genre</label>
                          <div className='select'>
                            <select id="gender" name="gender" required>
                              <option value="">Choisir une option</option>
                              <option value="homme" selected={'homme'=== user && user.gender }>Homme</option>
                              <option value="femme" selected={'femme'=== user && user.gender}>Femme</option>
                              <option value="autre" selected={'autre'=== user && user.gender}>Autre</option>
                            </select>
                          </div>
                    <div>
                    <div className='field'>
                      <label className='label' htmlFor="name">Description</label>
                      <input className='input' name="description" type ="text" id="description" placeholder="Dites nous tout sur vous ..." defaultValue={user && user.description} required/>
                    </div>
                    <div className='field'>
                      <label className='label' htmlFor="email">Email</label>
                      <input className='input' name="email" type ="email" id="email" placeholder="" defaultValue={user && user.email} required/>
                    </div>
                    <div className='field'>
                      <label className='label' htmlFor="password">Mot de passe</label>
                      <input className='input' name="password" type ="password" id="password" placeholder="" defaultValue={user && user.password} required/>
                    </div>
                    <div className='field'>
                      <label className='label' htmlFor="phone">Téléphone</label>
                      <input className='input' name="phone" type ="phone" id="phone" placeholder="" defaultValue={user && user.phone} required/>
                    </div>
                    <div className="field">
                    <label className='label' htmlFor="status">Vous êtes ...</label>
                          <div className='select'>
                            <select id="status" name="status" required>
                              <option value="">Choisir une option</option>
                              <option value="particulier" selected={'particulier'=== user && user.status }>un particulier</option>
                              <option value="association" selected={'association'=== user && user.status}>une association</option>
                              <option value="entreprise" selected={'entreprise'=== user && user.status}>une entreprise</option>
                            </select>
                          </div>
                    <div>
                    <button className='button is-primary is-rounded'>Soumettre</button>
                    </div>
                    </div>
                    </div>
                    </div>
            </form>
        </div>
    )
}

export default withRouter(UserInfosForm);
