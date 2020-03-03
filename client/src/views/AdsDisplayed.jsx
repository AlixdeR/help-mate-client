import React, { Component } from "react";
import APIHandler from "../../src/api/APIHandler";
import PreviewAd from "../components/ad/PreviewAd";

export default class Ads extends Component {
  state = {
    ads: [],
    message: ""
  };

  filterAds = e => {
    APIHandler.get(`/ads/search?q=${e.target.value}`)
    .then(APIRes => {
        console.log(APIRes.data)
        console.log(e.target.value)
        this.setState({ads: APIRes.data})
        this.setState({message: "Pas de résultat..."})
    })
    .catch(APIErr=>console.log(APIErr))
}

  componentDidMount() {
    APIHandler.get("/ads")
    .then(apiRes => {
      this.setState({ ads: apiRes.data });
    })
    .catch(err => console.error(err));
  }

  render() {
    return (

      <React.Fragment>

        <h1 className="title">Toutes les annonces</h1>

        <input onChange={this.filterAds} id="search-bar" className="input" type="text" placeholder="Recherche..."></input>

        {Boolean((this.state.ads).length) ? this.state.ads.map((ad, i) => (
          <PreviewAd data={ad}/>
        )) : <p>Aucune annonce...</p>}

      </React.Fragment>
    );
  }
}