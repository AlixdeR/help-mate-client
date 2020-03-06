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
      name: "Bricolage",
      active: false
    },
    {
      name: "Visites",
      active: false
    },
    {
      name: "Courses",
      active: false
    },
    {
      name: "Ménages",
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
        <h1 className="title">Toutes les annonces</h1>
      </Link>
      <div className="tabs is-centered">
        <div onClick={toggleFilters} className="button is-rounded">
          <FontAwesomeIcon icon={faSlidersH} />
        </div>
        <ul>
          <li className="is-active">
            <a id='' onClick={setCategorySelected}>Tout</a>
          </li>

          <li>
            <a id='Administratif' onClick={setCategorySelected}>Administratif</a>
          </li>
          <li>
            <a id='Aide-Ménagère' onClick={setCategorySelected}>Aide Ménagère</a>
          </li>
          <li>
            <a id='Bricolage' onClick={setCategorySelected}>Bricolage</a>
          </li>
          <li>
            <a id='Courses' onClick={setCategorySelected}>Courses</a>
          </li>
          <li>
            <a id='Cours-Particuliers' onClick={setCategorySelected}>Cours Particuliers</a>
          </li>
          <li>
            <a id='Dons' onClick={setCategorySelected}>Don(s)</a>
          </li>
          <li>
            <a id='Transport/Déménagement' onClick={setCategorySelected}>Transport/Déménagement</a>
          </li>
          <li>
            <a id='Visites-de-Courtoisie' onClick={setCategorySelected}>Visite de Courtoisie</a>
          </li>
        </ul>
        {/* <ul id="button-search">
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
        </ul> */}
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
