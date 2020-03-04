import React from "react";
import { Link } from "react-router-dom";
import Moment from 'react-moment';
import EditButton from "../EditButton";
import DeleteButton from "../DeleteButton";
// import '../styles/adsPreview.css'


export default function PreviewAd ({ data, mode, handleDelete }) {
  console.log("data", data)

  return <div>
  {/* <div className="preview-ad"> */}
    <Link to={{
      pathname: `/annonces/${data._id}`,
      state: {
        id: data._id
      }}}>
    <figure class="image is-96x96">
      <img src={data.image} alt="image"/>
    </figure>
    <h3 className="ad-title">" {data.title}"</h3>
    <p className="ad-date">Postée le : <Moment format="DD/MM/YYYY">
      {data.date}
      </Moment> 
      {/* par : {data.author} */}
    </p>
    </Link>

    {mode==="mes annonces" && <EditButton data={data}/>}
    {mode==="mes annonces" && <DeleteButton handleDelete={handleDelete} data={data}/>}
    {/* <IconFav/> */}
  {/* </div> */}
  </div>
  }
