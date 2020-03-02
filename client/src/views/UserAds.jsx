import React, { Component } from "react";
import APIHandler from "../../src/api/APIHandler";
import PreviewAd from "../components/ad/PreviewAd";

export default class UserAds extends Component {
    state = {
        ads: []
    };

  componentDidMount() {
    APIHandler.get(`/users/${this.props.match.params.id}`)
    .then(apiRes => {
        console.log(apiRes.data.ads);
      this.setState({ ads: apiRes.data.ads });
    })
    .catch(err => console.error(err));
  }

    render() {
        return (
            <React.Fragment>
                <h1 className="title">Toutes mes annonces</h1>
                {Boolean((this.state.ads).length) ? 
                this.state.ads.map((ad, i) => (
                    <PreviewAd mode="mes annonces" data={ad}/>
                )) : <p>Aucune annonce...</p>}
                
            </React.Fragment>
        )
    }
}


