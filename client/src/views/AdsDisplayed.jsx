import React, { Component } from "react";
import APIHandler from "../../src/api/APIHandler";
import PreviewAd from "../components/ad/PreviewAd";

export default class Ads extends Component {
  state = {
    ads: []
  };

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

        {Boolean((this.state.ads).length) ? this.state.ads.map((ad, i) => (
          <PreviewAd data={ad}/>
        )) : <p>Aucune annonce...</p>}

      </React.Fragment>
    );
  }
}