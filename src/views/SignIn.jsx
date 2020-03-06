import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
// custom tools
import UserContext from "../auth/UserContext";
import APIHandler from "../api/APIHandler";

export default function Signin(props) {
  const [email, setEmail] = useState("Email");
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
    <h1 className="title center-content">Se connecter</h1>
      <form className="center-content" onSubmit={handleSubmit}>
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
        <br></br><br></br>
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
<<<<<<< HEAD
        <button className="center-con">ok</button>
=======
        <br></br><br></br>
        <button className="button is-rounded is-primary">Je me connecte</button>
>>>>>>> 5b0e6480a595ed19da0b0d192acec8f374682a35
      </form>
      <br></br>
      <p className="center-content">
        Pas de compte? N'hésitez pas à{" "}
        <Link to="/signup" className="link">
          vous inscrire!
        </Link>
      </p>
    </React.Fragment>
  );
}
