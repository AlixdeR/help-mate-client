import React from 'react'
import AdsDisplayed from "../views/AdsDisplayed";
import { Link } from "react-router-dom";
import '../styles/home.css'

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
                        <li className="is-active" >
                            <Link to="/annonces" id="service" onClick={handleTypeHome}>Je veux aider</Link>
                        </li>
                        <li id="demande" onClick={handleTypeHome}>
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

<section id="end-box" class="hero">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">Helpmate c'est quoi ? </h1>
      <div className="content">
Helpmate est un site dédié à l'entraide. L'idée est toute simple : vous avez besoin d'un coup de main ? Postez une annonce. Trop de tomates dans votre jardin ? Postez une annonce et partagez avec la communauté.       </div>
    </div>
  </div>
</section>

        </>
    )
}
