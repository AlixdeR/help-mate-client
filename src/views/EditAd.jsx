import React, { Component } from "react";
import FormEditAd from "../components/ad/FormEditAd";


export default function EditAd(props) {
    return (
        <div>
            <h1 className='title is-3 center-content'>Modifier une annonce</h1>
            <FormEditAd data={props.location.state} id={props.location.state.id}/>
            
        </div>
    )
}
