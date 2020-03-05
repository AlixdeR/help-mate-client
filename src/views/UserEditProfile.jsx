import React, { useState, useEffect } from 'react'
import UserInfosForm from '../components/user/UserInfosForm'
import APIHandler from '../api/APIHandler'

import '../styles/form.css'

export default function UserEditProfile(match, history) {
    const [user, setUser] = useState({})

    useEffect(() => {
        APIHandler.get(`/users/${match.match.params.id}`)
            .then(apiRes => {
                setUser(apiRes.data)
            })
    }, [])
    return (
        <div className="createForm-page">
            <div className="form-container">
                <h1 className='title is-3 center-content'>Modifier mon profil</h1>
                <UserInfosForm mode='edit' user={user} />
            </div>
        </div>
    )
}
