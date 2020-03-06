import React from 'react';
import APIHandler from "../../src/api/APIHandler";

export default function DeleteButton({ data, handleDelete }) {


    return (

        <div>
            <button className="button is-primary is-rounded small red" onClick={() => handleDelete(data._id)}>Supprimer</button>
        </div>
    )
}
