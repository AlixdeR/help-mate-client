import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkedAlt} from "@fortawesome/free-solid-svg-icons";
import { faThList} from "@fortawesome/free-solid-svg-icons";
import { faSliders} from "@fortawesome/free-solid-svg-icons";

export default function TabsAds({toggle, mapActive}) {
  return (
    <div>
      <h1 className="title">Toutes les annonces</h1>
      <div className="tabs is-centered">
        <ul>
          <li className="is-active">
            <a>Bricolage</a>
          </li>
          <li>
            <a>Visites</a>
          </li>
          <li>
            <a>Courses</a>
          </li>
          <li>
            <a>Free Hugs</a>
          </li>
        </ul>
            <div onClick={toggle} className={mapActive===false ?"button is-active" : "button"}>
            <FontAwesomeIcon
              icon={faThList}
            />
            </div>
            <div onClick={toggle} className={mapActive===true ?"button is-active" : "button"}>
            <FontAwesomeIcon
              className="is-hoverable"
              icon={faMapMarkedAlt}
            />
            </div>
      </div>
    </div>
  );
}
