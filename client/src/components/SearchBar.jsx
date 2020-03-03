import React, { Component } from 'react';
import APIHandler from '../api/APIHandler';

export default class SearchBar extends Component {
    state = {
        ads: [],
        message: ""
    }

    filterAds = (e) => {
        APIHandler.get(`ads/search?q=${e.target.value}`)
        .then(APIRes => {
            console.log(APIRes)
            this.setState({ads: APIRes.data})
            this.setState({message: "Aucune annonce correspondante..."})
        })
        .catch(APIErr=>console.log(APIErr))
    }



    render() {
        return (
            <div>
                <input onChange={this.filterAds} class="input" type="text" placeholder="Recherche..."></input>
            </div>
        )
    }
}