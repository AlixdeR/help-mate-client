import React from 'react'
import AdsDisplayed from "../views/AdsDisplayed";
import { Link } from "react-router-dom";
import '../styles/home.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const LinkedinIcon = <FontAwesomeIcon icon={faLinkedin} />;

export default function Home({ handleTypeHome }) {
    return (
        <>
            <section className="hero is-info is-large">
                <div className="hero-body">
                    <div className="container has-text-centered">
                    <p className="title">
                        "Un service rendu, un chaton sauvé"
                    </p>
                    <p className="subtitle">
                        "Toi aussi sauve des chatons et rends des services à la communauté"
                    </p>
                    </div>
                </div>

                <div className="hero-foot">
                    <nav className="tabs is-boxed is-fullwidth">
                    <div className="container">
                        <ul>
                        <li className="nav-element">
                            <Link to="/annonces" id="service" onClick={handleTypeHome}>Je veux aider</Link>
                        </li>
                        <li className="nav-element" onClick={handleTypeHome}>
                            <Link to="/annonces" id="demande" onClick={handleTypeHome}>J'ai besoin d'aide</Link>
                        </li>
                        </ul>
                    </div>
                    </nav>
                </div>
            </section>

<hr/>

<section class="hero is-primary is-light all-annonces">
  <div class="hero-body">
    <div class="container">
      <div className="title-and-img">
      <Link to="/annonces"><h1 className="title">Toutes les annonces</h1></Link>
      <img className="img-services" src="/O2-emploi-services-à-la-personn-e.png" alt=""/>
      </div>
      
        <div className="content">
          <AdsDisplayed max={3}/>
        </div>
    </div>
  </div>
</section>

<section className="end-box">
  <div className="content-end">
    <h1 class="title"> HelpMate c'est quoi? </h1>
    <div>HelpMate est un site dédié à l'entraide. L'idée est toute simple... Vous avez besoin d'un coup de main? Trop de tomates dans votre jardin? <br></br> Postez une annonce et partagez avec la communauté. </div>
    
    <br></br><br></br>
    <div className="content-bis">
      <p>
          <strong>HelpMate</strong>
          { ' by ' }
          <a href="https://www.linkedin.com/in/alix-de-ribet-237a48119/">
              Alix { LinkedinIcon }
          </a>
          {', '}
          <a href="https://www.linkedin.com/in/camille-de-l%C3%A9pine-robinel-326925158/">
              Camille { LinkedinIcon }
          </a>
          {', '}
          <a href="https://www.linkedin.com/in/pauline-morsli/">
              Pauline { LinkedinIcon }
          </a>
          {' & '} 
          <a href="https://www.linkedin.com/in/wendy-evora-978653142/">
              Wendy { LinkedinIcon }
          </a>.
        </p>
        </div>
      </div>
</section>

        </>
    )
}
