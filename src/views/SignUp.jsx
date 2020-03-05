import React, { useState, useEffect } from 'react'
import { withRouter } from "react-router-dom";
// import Avatar from './Avatar'
import UserInfosForm from '../components/user/UserInfosForm'

import '../styles/form.css'

export default function SignUp() {

    return (
        <div className="createForm-page">
            <div className="form-container">
                <h1 className='title is-3'>Créer un compte</h1>
                <UserInfosForm mode='create' />
            </div>
        </div>
    )
}

