import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
// custom tools
import UserContext from "../auth/UserContext";
import APIHandler from "../api/APIHandler";

export default function Signin(props) {
  const [email, setEmail] = useState("monemail");
  const [password, setPassword] = useState("1234");
  const userContext = useContext(UserContext);
  const { setCurrentUser } = userContext;

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const apiRes = await APIHandler.post("/signin", { email, password });
      setCurrentUser(apiRes.data.currentUser);
      props.history.push("/annonces");
    } catch (err) {
      setCurrentUser(null);
    }
  };

  return (
    <React.Fragment>
    <br/>
    <br/>
      <form className="center-content" onSubmit={handleSubmit}>
        <h1 className="title">Se connecter</h1>
        <label className="label" htmlFor="email">
          Email
        </label>
        <input
          className="input is-rounded is-primary"
          id="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label className="label" htmlFor="password">
          Mot de passe
        </label>
        <input
          className="input is-rounded is-primary"
          id="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button className="center-con">ok</button>
      </form>
      <p className="center-content">
        Pas de compte ? N'hésitez pas à{" "}
        <Link to="/signup" className="link">
          vous inscrire !
        </Link>
      </p>
    </React.Fragment>
  );
}
