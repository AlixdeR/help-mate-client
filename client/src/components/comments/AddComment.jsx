import React, { Component } from "react";
import APIHandler from "../../api/APIHandler";

export default class AddComment extends Component {
  state = {
      rate: 0,
      text: "",
  };

  handleState = e => {
    // if (e.target.name === "image") return;
    // if (e.target.type === "radio") this.setState({ adType: e.target.value });
    this.setState({ [e.target.name]: e.target.value });
  };

  submitForm = e => {
    e.preventDefault();
    console.log("this is state",this.state)
    APIHandler.post(`/comments/${this.props.userId}`, this.state)
      .then(apiRes =>
        this.setState({
          msg: <div className="msg-fail">Commentaire posté!</div>
        })
      )
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
 

    return (
      <div>
        {this.state.msg && this.state.msg}

        <form
          className="center-content"
          onSubmit={this.submitForm}
          onChange={this.handleState}
        >
          <div className="field">
            <input type="number" name="rate"/>
          </div>
          <div className="field">
            <label className="label">Votre message</label>
            <textarea
              className="textarea"
              name="text"
              placeholder="Votre commentaire"
            ></textarea>
          </div>

          <button className="button is-primary is-rounded" type="submit">
            Poster mon commentaire
          </button>
        </form>
      </div>
    );
  }
}
