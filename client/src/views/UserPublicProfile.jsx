import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import apiHandler from "../api/APIHandler";
import UserInfos from "../components/user/UserInfos";
import AddComment from "../components/comments/AddComment";
import DisplayComments from "../components/comments/DisplayComments";
 
 export default function UserPublicProfile({match}) {
     const [userInfos, setUserInfos] = useState (null)
     useEffect(()=>{
         apiHandler.get(`/users/${match.params.id}`)
         .then(apiRes => setUserInfos(apiRes.data))
         .catch(apiErr => console.error(apiErr))
     }, [])
     return (
         <div className='aside-user-infos'>
             <UserInfos userInfos={userInfos}/>
             <DisplayComments/>
             <AddComment/>
             {/* <DisplayAds /> */}
         </div>
     )
 }
 