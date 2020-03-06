import React from "react";
import APIHandler from "../../api/APIHandler";
import PreviewAd from "../../components/ad/PreviewAd";
import Map from "../../components/map/Map";
import { LoadScript } from "@react-google-maps/api";
import { Link } from "react-router-dom";

export default function AdDetails({ data }) {
  console.log('data', data);
  return (
    <>
      <div className='ad-details'>
       <div className='ad-title'>
        <span className='title'>{data.title}</span> <span className="tag is-primary">{data.category}</span>
        </div>
        <div>
        <div className='ad-description'>
        <img src={data.image} alt="image-annonce" width='300'/>
        <div className='details'>
        <p className=""><strong>Disponibilités : </strong>{data.availability}</p>
        <p className=""><strong>Description : </strong>{data.description}</p>
        </div>
        </div>
        <p className="">{data.street}</p>
        <p className="">{data.zipCode}</p>
        <p className="">{data.city}</p>
        </div>
      </div>
      <Link to={`/messages/${data.author._id}`}> <div className='button is-rounded is-info'> Contacter {data.author.name}</div></Link>
      <LoadScript
        id="script-loader"
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_APIKEY}
      >
        <Map location={data.location.coordinates} />
      </LoadScript>
    </>
  );
}
