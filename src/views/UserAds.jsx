import React, { Component } from "react";
import APIHandler from "../../src/api/APIHandler";
import PreviewAd from "../components/ad/PreviewAd";
import { Redirect } from "react-router-dom";
import { useAuth } from "../auth/useAuth";


export default class UserAds extends Component {

    state = {
        ads: []
    };


    fetchData(){
      APIHandler.get(`/users/${this.props.match.params.id}`)
      .then(apiRes => {
        this.setState({ ads: apiRes.data.ads })})
      .catch(err => console.error(err));
    }

    componentDidMount() {
      this.fetchData();
    }

    handleDelete = id => {
      APIHandler
      .delete("/ads", id)
      .then(apiRes => {
        this.fetchData();
      })
      .catch(apiErr => console.log(apiErr))
    }

    render() {
        return (

            <React.Fragment>

                <h1 className="title">Toutes mes annonces</h1>
                {Boolean((this.state.ads).length) ? 
                this.state.ads.map((ad, i) => (
                    <PreviewAd  mode="mes annonces"  handleDelete={this.handleDelete}data={ad}/>
                )) : <p>Aucune annonce...</p>}
                
            </React.Fragment>
        )
    }
}


