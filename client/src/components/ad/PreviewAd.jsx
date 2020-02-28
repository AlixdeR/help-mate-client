import React from "react";
import { Link } from "react-router-dom";

export default function PreviewAd ({ data }) {
  
  return <div>
    <div className="preview-ad"></div>
    <Link to={`/annonces/${data._id}`}> 
    <img src={data.image} alt="image"/>
    <h3>{data.title}</h3>
    <p>Créé le : {data.date}</p>
    <p>{data.availability}</p>
    </Link>
    {/* <IconFav/> */}
  </div>
}
