import React, { Component } from 'react';
import APIHandler from "../../src/api/APIHandler";
import AdDetails from "../components/ad/AdDetails";

export default class Ad extends Component {
    state = {
        ad: []
    }

    componentDidMount() {
        APIHandler.get(`/ads/${this.props.location.state.id}`)
        .then(apiRes => {
          this.setState({ ad: apiRes.data });
        })
        .catch(err => console.error(err));
      }

    render() {
        return (
            <div>
                <AdDetails data={this.state.ad}/>
            </div>
        )
    }
}

