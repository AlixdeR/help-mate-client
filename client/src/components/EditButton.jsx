import React from 'react';
import { Link } from "react-router-dom";

export default function EditButton({ data }) {
    return (
        <div>
              <Link to={{
                  pathname: `/editer-mon-annonce/${data._id}`,
                  state: {
                      id: data._id,
                      title: data.title,
                      description: data.description,
                      category: data.category,
                      availability: data.availability,
                      adType: data.adType,
                      address: data.address,
                      image: data.image
                }}}> 
                <button>MODIFIER ANNONCE</button>
                </Link>
        </div>
    )
}
