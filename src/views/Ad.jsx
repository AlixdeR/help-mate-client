import React, { useState, useEffect } from 'react';
import APIHandler from "../../src/api/APIHandler";
import AdDetails from "../components/ad/AdDetails";
import UserInfos from "../components/user/UserInfos";
import { useAuth } from "../auth/useAuth";


export default function Ad({match}) {
    const { isLoading, currentUser } = useAuth();
    const [ad, setAd] = useState(null);
    const [userInfos, setUserInfos] = useState({});

    useEffect(()=>{
        APIHandler.get(`/ads/${match.params.id}`)
        .then(apiRes => {
            setAd(apiRes.data);
            setUserInfos(apiRes.data.author)
        })
        .catch(err => console.error(err));
        // APIHandler.get(`/users/${currentUser._id}`)
        //  .then(apiRes => setUserInfos(apiRes.data))
        //  .catch(apiErr => console.error(apiErr))
    }, [])
    return (
        <div className='profile-page'>
            <div className='profile-aside'>
                {userInfos && <UserInfos userInfos={userInfos}/>}
            </div>
            {ad && <AdDetails data={ad}/>}
        </div>
    )
}


