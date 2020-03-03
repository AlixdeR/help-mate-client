import React from 'react';
import APIHandler from "../../src/api/APIHandler";

export default function DeleteButton({ data, handleDelete }) {


    return (

        <div>
            <button onClick={() => handleDelete(data._id)}>Supprimer mon annonce</button>
        </div>
    )
}
