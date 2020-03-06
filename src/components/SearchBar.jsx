import APIHandler from '../api/APIHandler';
import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchBar({ history,match,params, searchClbk}) {

    const [input, setInput] = useState("");

    const handleChange = e => {
        setInput(e.target.value)

    }

    const handleClick = e => {
        if(input) {
            history.push({
                pathname: "/annonces",
                search: `?search=${input}`
            });
            setInput("");
            // APIHandler
            //     .get(`ads/search?q=${input}`)
            //     .then(APIRes => {
            //         searchClbk(APIRes.data);
            //         history.push("/annonces");
            //         setInput("");
            //     })
            //     .catch(APIErr=>console.log(APIErr));
        } else searchClbk(undefined); 
    }

      return (
        <div className="searchBar">
            <input 
                onChange={handleChange} 
                className="inputSearch" 
                type="text" 
                placeholder="Recherche..." 
                value={input}>
            </input>           
            <div 
                className="btnSearch" 
                onClick={handleClick}>
                <FontAwesomeIcon
                icon={faSearch}
                size="m" /> 
            </div>
        </div>
      );
    }

    export default withRouter(SearchBar);