import React from 'react';
import APIHandler from "../../api/APIHandler";
import PreviewAd from "../../components/ad/PreviewAd";

export default function AdDetails({ data }) {

    return (
        <div>
            <h2>{data.title}</h2>
            <img src={data.image} alt="image-annonce"/>
            <p className="ad-details">{data.availability}</p>
            <p className="ad-details">{data.category}</p>
            <p className="ad-details">{data.description}</p>
            <p className="ad-details">{data.adType}</p>
            <p className="ad-details">{data.availability}</p>
            <p className="ad-details">{data.street}</p>
            <p className="ad-details">{data.zipCode}</p>
            <p className="ad-details">{data.city}</p>
        </div>
    )
}
