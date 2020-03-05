import APIHandler from '../api/APIHandler';
import React, { useState } from "react";
import { withRouter } from "react-router-dom";

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
        <div>
            <input onChange={handleChange} className="input" type="text" placeholder="Recherche..." value={input}></input>
            <button onClick={handleClick}>GO!</button>
        </div>
      );
    }

    export default withRouter(SearchBar);