import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import apiHandler from "../api/APIHandler";
import UserInfos from "../components/user/UserInfos";
import AddComment from "../components/comments/AddComment";
import DisplayComments from "../components/comments/DisplayComments";
import DisplayAds from "../components/ad/DisplayAds";
import AddResponseToComments from "../components/comments/AddResponseToComments";
export default function UserPublicProfile({ match }) {
  const [userInfos, setUserInfos] = useState(null);
  const [currentResponseId, setCurrentResponseId] = useState(null);
  const handleResponse = (e, id) => {
    setCurrentResponseId(id);

  };

  useEffect(() => {
    apiHandler
      .get(`/users/${match.params.id}`)
      .then(apiRes => {
        console.log(apiRes.data);
        setUserInfos(apiRes.data);
      })
      .catch(apiErr => console.error(apiErr));
  }, []);

  console.log(userInfos,"this is user infos whooo");

  return (
    <div className="profile-page">
      <div className="profile-aside">
        <UserInfos userInfos={userInfos} />
        <DisplayAds max={2} ads={userInfos && userInfos.ads} />
      </div>
      {userInfos && (
        <DisplayComments clbk={handleResponse} comments={userInfos.comments} />
      )}
      {!currentResponseId && <AddComment handleUserUpdate={setUserInfos} userId={match.params.id} />}
      {currentResponseId && (
        <AddResponseToComments handleUserUpdate={setUserInfos} userId={match.params.id} currentResponseId={currentResponseId} />
      )}
    </div>
  );
}
