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
        <h2>{data.title}</h2>
        <img src={data.image} alt="image-annonce" width='300'/>
        <p className="ad-details">{data.availability}</p>
        <p className="ad-details">{data.category}</p>
        <p className="ad-details">{data.description}</p>
        <p className="ad-details">{data.adType}</p>
        <p className="ad-details">{data.availability}</p>
        <p className="ad-details">{data.street}</p>
        <p className="ad-details">{data.zipCode}</p>
        <p className="ad-details">{data.city}</p>
      </div>
      <Link to={`/messages/${data.author._id}`> <div className='button is-rounded is-primary'> Contacter {data.author.name}</div>
      <LoadScript
        id="script-loader"
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_APIKEY}
      >
        <Map location={data.location.coordinates} />
      </LoadScript>
    </>
  );
}
