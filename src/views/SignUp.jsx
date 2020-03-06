import React, { useState, useEffect } from 'react'
import { withRouter } from "react-router-dom";
// import Avatar from './Avatar'
import UserInfosForm from '../components/user/UserInfosForm'

import '../styles/form.css'

export default function SignUp() {

    return (
        <div className="createForm-page">
            {/* <div className="form-container"> */}
                <UserInfosForm mode='create' />
            {/* </div> */}
        </div>
    )
}

