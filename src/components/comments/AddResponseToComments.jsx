import React, { Component } from "react";
import APIHandler from "../../api/APIHandler";

export default class AddResponseToComments extends Component {
  state = {
    response: "",
    currentResponseId: this.props.currentResponseId
  };

  handleState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitForm = e => {
    e.preventDefault();
    console.log(this.state);
    APIHandler.post(`/comments/${this.props.userId}`, this.state)
      .then(apiRes => {
        this.props.handleUserUpdate(apiRes.data);
      })
      .catch(apiErr =>
        this.setState({ msg: <div className="msg-fail">Erreur!</div> })
      );

    // APIHandler.post("/ads", {
    //   title: this.state.title,
    //   category: this.state.category,
    //   description: this.state.description,
    //   availability: this.state.availability,
    //   adType: this.state.adType,
    //   address: {
    //       street: this.state.street,
    //       zipCode: this.state.zipCode,
    //       city: this.state.city,
    //   },
    //   image: this.state.image
    // })
    // .then(apiRes => this.setState({msg: <div className="msg-fail">Annonce créée!</div>}))
    // .catch(apiErr => this.setState({msg: <div className="msg-fail">An error occured, try again!</div>}));
  };

  render() {
    console.log("hey je suis l'ID d'un comment", this.props.currentResponseId);

    return (
      <div>
        {this.state.msg && this.state.msg}

        <form
          className="center-content form-comment border-form"
          onSubmit={this.submitForm}
          onChange={this.handleState}
        > 
          <h3 className="title-3">Votre réponse à ce commentaire</h3>
          <div className="inside-form">
          <div className="field">
            <textarea
              className="textarea"
              name="text"
              placeholder="Votre réponse"
            ></textarea>
          </div>
          </div>
          <input
            type="text"
            name="currentResponseId"
            id=""
            value={this.state.currentResponseId} hidden/>
        
          <button className="button is-primary is-rounded" type="submit">
            Poster ma réponse
          </button>
        </form>
      </div>
    );
  }
}
