import React, { useState, useEffect } from "react";
import Filters from "./Filters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { faThList } from "@fortawesome/free-solid-svg-icons";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import '../../styles/tabsAds.css'

export default function TabsAds({
  getUserlocation,
  toggle,
  maxDistance,
  mapActive,
  toggleFilters,
  changeMaxDistance,
  filtersActive,
  setTypeSelected,
  setCategorySelected,
  handleinput,
  handleSubmit
}) {
  // const [isActive, setisActive] = useState(false);
  const [categories, setCategories] = useState([
    {
      name: "Tout",
      active: true
    },
    {
      name: "Administratif",
      active: false
    },
    {
      name: "Aide Ménagère",
      active: false
    },
    {
      name: "Bricolage",
      active: false
    },
    {
      name: "Courses",
      active: false
    },
    {
      name: "Cours particuliers",
      active: false
    },
    {
      name: "Dons",
      active: false
    }
  ]);
  // const [selectedCategories, setSelectedCategories] = useState({
  //   tout: "",
  // })
  // const handleActive = (e) => {
  //     setCategorySelected()
  //     var links = document.querySelectorAll("a")
  //     links.forEach((link) => link.className = "")

  // };
  // const handleActive = React.createClass({
  //   onClick: function(e){
  //     setisActive(!isActive)
  //     setCategorySelected()
  //   };

  const handleSelectedCategories = e => {
    setCategorySelected(e);
    setCategories(
      categories.map(c => {
        if (
          e.target.id === c.name ||
          (e.target.id === "" && c.name === "Tout")
        ) {
          c.active = true;
        } else c.active = false;
        return c;
      })
    );
  };

  return (
    <div>
      <Link to="/annonces">
        <h1 className="title title-1">Toutes les annonces</h1>
      </Link>
      <div className="tabs is-centered">
        <div onClick={toggleFilters} className="button is-rounded">
          <FontAwesomeIcon icon={faSlidersH} />
        </div>
        <ul id="button-search">
          {categories.map(c => (
            <li className={c.active ? "is-active" : ""}>
              <a
                id={c.name === "Tout" ? "" : c.name}
                onClick={e => handleSelectedCategories(e)}
              >
                {c.name}
              </a>
            </li>
          ))}
        </ul>
        <div
          onClick={toggle}
          className={mapActive === false ? "button is-active" : "button"}
        >
          <FontAwesomeIcon icon={faThList} />
        </div>
        <div
          onClick={toggle}
          className={mapActive === true ? "button is-active" : "button"}
        >
          <FontAwesomeIcon className="is-hoverable" icon={faMapMarkedAlt} />
        </div>
      </div>
      {filtersActive && (
        <Filters
          maxDistance={maxDistance}
          getUserlocation={getUserlocation}
          changeMaxDistance={changeMaxDistance}
          handleSubmit={handleSubmit}
          handleinput={handleinput}
          setTypeSelected={setTypeSelected}
        />
      )}
    </div>
  );
}