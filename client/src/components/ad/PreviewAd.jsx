import React from "react";
import { Link } from "react-router-dom";
import Moment from 'react-moment';
import EditButton from "../EditButton";
import DeleteButton from "../DeleteButton";
// import '../styles/adsPreview.css'


export default function PreviewAd ({ data, mode,handleDelete }) {
  
  return <div>
    <div className="preview-ad"></div>
    <Link to={{
      pathname: `/annonces/${data._id}`,
      state: {
        id: data._id
      }}}>
    <figure class="image is-96x96">
      <img src={data.image} alt="image"/>
    </figure>
    <h3>{data.title}</h3>
    <p>Postée le : <Moment format="DD/MM/YYYY">
      {data.date}
      </Moment>
    </p>
    </Link>

    {mode==="mes annonces" && <EditButton data={data}/>}
    {mode==="mes annonces" && <DeleteButton handleDelete={handleDelete} data={data}/>}
    {/* <IconFav/> */}
  </div>
}
