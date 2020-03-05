import React, { Component } from "react";
import APIHandler from "../../api/APIHandler";

export default class AddComment extends Component {
  state = {
    rate: 0,
    text: ""
  };

  handleState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitForm = e => {
    e.preventDefault();
    APIHandler.post(`/comments/${this.props.userId}`, this.state)
      .then(apiRes => {
        console.log(apiRes.data,"this is data")
        this.props.handleUserUpdate(apiRes.data);
        this.setState({
          msg: <div className="msg-fail">Commentaire posté!</div>
        });
      })
      .catch(apiErr =>
        this.setState({ msg: <div className="msg-fail">Erreur!</div> })
      );
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
            <input type="number" name="rate" />
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
