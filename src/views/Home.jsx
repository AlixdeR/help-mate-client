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
                        "Quand chacun s'aide, personne ne se tue."
                    </p>
                    <p className="subtitle">
                        "Dans notre société, les écarts de richesse se creusent, mais un phénomène est peut-être en train d'inverser la tendance, la solidarité !"
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

<section class="hero is-primary is-light">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">A propos de :</h1>
      <h2 class="subtitle">HelpMate</h2>
      <div className="content">
        Nous avons tous déjà eu recours à l'entraide dans notre vie, et cette notion est bien plus présente dans notre quotidien que nous le pensons. En effet, elle entre en jeu dans notre vie de tous les jours, dans notre vie privée, au sein de notre famille, au travail, etc..
        L'entraide ne date pas d'hier, l'être humain était autrefois l’espèce la plus coopérative du monde vivant, cela à cause de (ou grâce à) toutes les contraintes auxquelles il était exposé. C’est notre vulnérabilité qui nous a rendu forts, qui nous a obligé à prendre soin des autres, à nous réunir en clans, à coopérer.
        L’entraide est profondément ancrée en nous. Nous sommes une espèce "ultrasociale".
        Sauf que cette fois, la possibilité même d’entraide semble nous filer entre les doigts ! 
        C'est pourquoi nous avons pensé à développer HelpMate afin de mobilier les citoyens...
        </div>
    </div>
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
<hr/>
<section class="hero is-primary is-danger">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">Comment ça marche HelpMate ?</h1>
      <div className="content">
            <p>1ere étape</p>
            <p>2eme étape</p>
            <p>3eme étape</p>
        </div>
    </div>
  </div>
</section>

        </>
    )
}
