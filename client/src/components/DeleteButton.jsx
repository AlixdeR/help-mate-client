import React from 'react';
import APIHandler from "../../src/api/APIHandler";

export default function DeleteButton({ data }) {
    console.log(data._id)

    const handleDelete = e => {
        e.preventDefault();
    APIHandler
    .delete(`/ads/${data._id}`)
    .then(apiRes => console.log(apiRes))
    .catch(apiErr => console.log(apiErr))
   } 

    return (

        <div>
            <button onClick={handleDelete}>Supprimer mon annonce</button>
        </div>
    )
}
