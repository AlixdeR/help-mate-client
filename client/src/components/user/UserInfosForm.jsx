import React, { useState, useEffect}from 'react'
import { withRouter } from "react-router-dom";
import Avatar from './Avatar'
import apiHandler from '../../api/APIHandler'

function UserInfosForm({mode , user, history, match}) {
    const [formValues, setFormValues] = useState({});
    const [avatar, setAvatar] = useState("");
    const [avatarPreview, setAvatarPreview] = useState("");

    useEffect(()=>{
      let url;
      user ? url = user.avatar : url='https://www.bitgab.com/uploads/profile/files/default.png';
      setAvatar(url);
      setAvatarPreview(url);
      console.log(mode)
    },[user])
  
    function handleChange(event) {
        if (event.target.name === "avatar") return;
        let value =
          event.target.type === "checkbox"
            ? event.target.checked
            : event.target.value;
        setFormValues({
          ...formValues,
          [event.target.name]: value
        });
      }
    
const formHandler = async  e => {
        e.preventDefault();
        const fd = new FormData();
        for (const key in formValues) {
          fd.append(key, formValues[key])
          console.log(key)
        }
        fd.append("avatar", avatar);
        // fd.append("username", username);
        // fd.append("description", description);
        // fd.append("name", name);
        // fd.append("lastName", lastName);
        // fd.append("password", password);
        // fd.append("phone", phone);
        // fd.append("email", email);
        // fd.append("gender", gender);
        // fd.append("status", status);

        try {
          if (mode === "create") await apiHandler.post("/signup", fd);
          else await apiHandler.patch(`/users/${user._id}`, fd);
          history.push("/");
        } catch (apiErr) {
          console.error(apiErr);
        }
}

      const handleAvatar = e => {
        let reader = new FileReader();
        const file = e.target.files[0];
        setAvatar(file);
        reader.onloadend = () => {
          setAvatarPreview(reader.result);
        };
        reader.readAsDataURL(file);
      };
    return (
        <div className='center-content'>
            {/* <Avatar/> */}
            <form  onSubmit={formHandler} onChange={handleChange} className='form' encType="multipart/form-data">
                    <Avatar clbk={handleAvatar} avatar={avatarPreview}/>
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
                              <option value="homme" selected={user && 'homme'===  user.gender }>Homme</option>
                              <option value="femme" selected={user && 'femme'=== user.gender}>Femme</option>
                              <option value="autre" selected={user &&'autre'===  user.gender}>Autre</option>
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
                    {mode==='create' && <div className='field'>
                      <label className='label' htmlFor="password">Mot de passe</label>
                      <input className='input' name="password" type ="password" id="password" required/>
                    </div>}
                    <div className='field'>
                      <label className='label' htmlFor="phone">Téléphone</label>
                      <input className='input' name="phone" type ="phone" id="phone" placeholder="" defaultValue={user && user.phone} required/>
                    </div>
                    <div className="field">
                    <label className='label' htmlFor="status">Vous êtes ...</label>
                          <div className='select'>
                            <select id="status" name="status" required>
                              <option value="">Choisir une option</option>
                              <option value="particulier" selected={user && 'particulier'=== user.status }>un particulier</option>
                              <option value="association" selected={user && 'association'=== user.status}>une association</option>
                              <option value="entreprise" selected={user && 'entreprise'=== user.status}>une entreprise</option>
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
