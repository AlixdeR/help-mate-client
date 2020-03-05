import React, {useState, useEffect} from "react";
import 'bulma-checkradio';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch} from "@fortawesome/free-solid-svg-icons";
import { faLocationArrow} from "@fortawesome/free-solid-svg-icons";
import 'bulma-divider';
// import 'bulma-slider';
// import 'bulma';

export default function Filters({setTypeSelected,maxDistance, handleinput, handleSubmit, changeMaxDistance, getUserlocation}) {
  return (
    <div className="panel">
    <div>
    <h3 className='title is-6'>Saisir une addresse</h3>
    <div class="">
    <p class="control has-icons-left">
      <form onSubmit={handleSubmit} ><input onChange={handleinput} class="input is-primary" type="text" placeholder="Adresse"/></form>
      <span class="icon is-left">
        <span aria-hidden="true"><FontAwesomeIcon
              icon={faSearch }
            /></span>
      </span>
    </p>
  </div>
  <div className="is-divider " data-content="OU"></div>
  <div className='centered-content'>
  <div onClick={getUserlocation} className='location-button is-centered button is-rounded is-primary'><span><FontAwesomeIcon
              icon={faLocationArrow }
            /></span>{"   "}Utiliser ma position</div>
    </div>
    </div>
    <div>
    <div><p className='title is-6'>Distance :</p> <strong>{maxDistance}km</strong></div>
    <input className="slider is-circle" step="1" min="0" max="50" onChange={changeMaxDistance} type="range"></input>
    </div>
    <div>
        <h3 className='title is-6'>Type d'annonces</h3>
      <div className="field">
        <input
        onChange={setTypeSelected}
          class="is-checkradio"
          id="toutes"
          type="radio"
          name="type"
          value=''
        />
        <label for="toutes">Toutes les annonces</label>
      </div>

      <div class="field">
        <input
        onChange={setTypeSelected}
          class="is-checkradio"
          id="exampleRadioSuccess"
          type="radio"
          name="type"
          value='demande'
        />
        <label for="exampleRadioSuccess">Demande d'aide</label>
      </div>

      <div class="field">
        <input
        onChange={setTypeSelected}
          class="is-checkradio"
          id="exampleRadioWarning"
          type="radio"
          name="type"
          value='service'
        />
        <label for="exampleRadioWarning">Proposition d'aide</label>
      </div>
      </div>
    </div>
  );
}
