import React, { Component } from "react";
import FormAd from "../components/ad/FormAd";
import { LoadScript } from "@react-google-maps/api";

import '../styles/form.css'



export default function CreateAd() {
    return (
        <div className="createForm-page">
            <div className="form-container">
                <h1 className='title is-3 center-content'>Créer une annonce</h1>
                <LoadScript
                    id="script-loader"
                    googleMapsApiKey={process.env.REACT_APP_GOOGLE_APIKEY}
                >
                    <FormAd />
                </LoadScript>
            </div>
        </div>
    )
}
