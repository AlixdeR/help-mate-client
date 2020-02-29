import React, { Component } from "react";
import FormEditAd from "../components/ad/FormEditAd";


export default function EditAd(props) {
    return (
        <div>
            <FormEditAd data={props.location.state} id={props.location.state.id}/>
        </div>
    )
}
