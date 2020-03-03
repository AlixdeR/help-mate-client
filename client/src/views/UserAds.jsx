import React, { Component } from "react";
import APIHandler from "../../src/api/APIHandler";
import PreviewAd from "../components/ad/PreviewAd";

export default class UserAds extends Component {
    state = {
        ads: []
    };

  componentDidMount() {
    APIHandler.get(`/users/${this.props.match.params.id}`)
    .then(apiRes => this.setState({ ads: apiRes.data.ads }))
    .catch(err => console.error(err));
  }

  componentDidUpdate(prevState) {
    if (this.state.ads !== prevState.ads) {
    return this.fetchData(this.state.ads);
  }}

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


