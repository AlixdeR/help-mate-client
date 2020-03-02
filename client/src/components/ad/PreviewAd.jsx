import React from "react";
import { Link } from "react-router-dom";
import Moment from 'react-moment';

export default function PreviewAd ({ data }) {
  
  return <div>
    <div className="preview-ad"></div>
    <Link to={{
      pathname: `/annonces/${data._id}`,
      state: {
        id: data._id
      }}}>
    <figure class="image is-128x128">
      <img src={data.image} alt="image"/>
    </figure>
    <h3>{data.title}</h3>
    <p>Postée le : <Moment format="DD/MM/YYYY">
      {data.date}
      </Moment>
    </p>
    <p>{data.availability}</p>
    </Link>
    {/* <IconFav/> */}
  </div>
}
