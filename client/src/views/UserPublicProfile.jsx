import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import apiHandler from "../api/APIHandler";
import UserInfos from "../components/user/UserInfos";
import AddComment from "../components/comments/AddComment";
import DisplayComments from "../components/comments/DisplayComments";
import DisplayAds from "../components/ad/DisplayAds";
 
 export default function UserPublicProfile({match}) {
     const [userInfos, setUserInfos] = useState (null)
     useEffect(()=>{
         apiHandler.get(`/users/${match.params.id}`)
         .then(apiRes => {
             console.log(apiRes.data)
             setUserInfos(apiRes.data)})
         .catch(apiErr => console.error(apiErr))
     }, [])
     return (
         <div className='profile-page'>
            <div className='profile-aside'>
             <UserInfos userInfos={userInfos}/>
             <DisplayAds ads={userInfos && userInfos.ads}/>
             </div>
             <DisplayComments/>
             <AddComment userId={match.params.id}/>
         </div>
     )
 }
 