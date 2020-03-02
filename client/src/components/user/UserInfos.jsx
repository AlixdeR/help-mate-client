import React from 'react'
import StarsRating from '../user/StarsRating'
import moment from "moment"
import 'moment/locale/fr';

export default function UserInfos({userInfos}) {

    function ratesAverage (array) {
        if (array.length === 0 )return 0 ;
        let average = array.reduce((accumulator, currentValue) => {
          if (currentValue === "" || currentValue===undefined || currentValue===null) {
            return accumulator += 0 ;
          } else { return accumulator += currentValue}}, 0)/ array.length;
        return Math.round(average)
      }
    console.log(userInfos)
    if(!userInfos){
        return <p>Loading ...</p>}
    return (
        <div className='aside-user-infos'>
            <img alt='avatar' src={userInfos.avatar} width='200' />
            <StarsRating n={ratesAverage(userInfos.rates)}/>
            <div>{userInfos.username}</div>
            <div>{userInfos.gender}</div>
            <div>Membre depuis <strong>{moment(userInfos.account_creation, moment.ISO_8601).lang("fr").fromNow(true)}</strong></div>
            <div>Age : {moment(userInfos.birthday, moment.ISO_8601).lang("fr").fromNow(true)}</div>
            {userInfos.ads && <div> A posté <strong>{userInfos.ads.length}</strong> annnonce(s)</div>}
        </div>
    )
}
