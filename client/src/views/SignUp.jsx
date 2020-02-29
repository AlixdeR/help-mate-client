import React, { useState, useEffect}from 'react'
import { withRouter } from "react-router-dom";
// import Avatar from './Avatar'
import UserInfosForm from '../components/user/UserInfosForm'

export default function SignUp() {
 
    return (
        <div>
            <h1 className='title is-3'>Créer un compte</h1>
            <UserInfosForm />
        </div>
    )
}

