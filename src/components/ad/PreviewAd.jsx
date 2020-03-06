import React from "react";
import { Link } from "react-router-dom";
import Moment from 'react-moment';
import EditButton from "../EditButton";
import DeleteButton from "../DeleteButton";
// import '../styles/adsPreview.css'


export default function PreviewAd ({ data, mode, handleDelete }) {


  return <div className="preview">
  {/* <div className="preview-ad"> */}
    <Link to={{
      pathname: `/annonces/${data._id}`,
      state: {
        id: data._id
      }}}>
    <div className="image is-96x96" style={{backgroundImage : `url(${data.image})`, backgroundSize : 'cover' }}>
    </div>
    <h3 className="titleAd">"{data.title}"</h3>
    <p className="ad-date">Postée le : <Moment format="DD/MM/YYYY">
      {data.date}
      </Moment> 
      {/* par : {data.author} */}
    </p>
    </Link>

    <div  className="buttons-edit">
    {mode==="mes annonces" && <EditButton data={data} />}
    {mode==="mes annonces" && <DeleteButton handleDelete={handleDelete} data={data}/>}
    </div>
    {/* <IconFav/> */}
  {/* </div> */}
  </div>
  }
