import React, { Component } from 'react'
import apiHandler from "../api/APIHandler";

import AdsDisplayedOnProfile from "../components/ad/AdsDisplayedOnProfile"
import OneComment from "../components/comments/OneComment"

import { Link } from "react-router-dom";


export default class UserPublicProfile extends Component {
    state = {
        profilUser: ""
    }

    componentDidMount() {
        apiHandler.get("/profilUser").then(apiRes => {
            this.setState({ user: apiRes.data.profilUser });
        });
    };


    render() {
        const { profilUser } = this.state;
        console.log(this.props, this.state);

        return (
            <>

                <div>

                    <div>
                        <p className="user-avatar">{this.state.avatar}</p>
                        <p className="rates">{this.state.rates}</p>
                    </div>

                    <div>{this.state.name}</div>

                <div className="user-ads">
                    <AdsDisplayedOnProfile />
                </div>

                </div>

                <div className="user-comments">
                    <OneComment />
                </div>
                <button>Ajouter un commentaire</button>

                <div className="add-comment-box">
                <p className="stars-rating"></p> //component des stars rates
                <label htmlFor="comment-user-input">Commentaire</label>
                <textarea name="comment-user-input" id="comment-user-input" cols="30" rows="10"></textarea>
                </div>
            </>
        )
    }
}

