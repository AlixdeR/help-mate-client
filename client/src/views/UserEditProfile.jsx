import React, {useState, useEffect}from 'react'
import UserInfosForm from '../components/user/UserInfosForm'
import APIHandler from '../api/APIHandler'


export default function UserEditProfile(match, history) {
    const [user, setUser] = useState({})

    useEffect(()=> {
        APIHandler.get(`/users/${match.match.params.id}`)
        .then(apiRes => {
            setUser(apiRes.data)})
    }, [])
    return (
        <div>
        <h1 className='title is-3'>Modifier mon profil</h1>
            <UserInfosForm mode='edit' user={user}/>
        </div>
    )
}
