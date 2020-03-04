import React from 'react'
import AdsDisplayed from "../views/AdsDisplayed";
import { Link } from "react-router-dom";
import '../styles/home.css'

export default function Home() {
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
                        <li className="is-active">
                            <Link to="/annonces?type=helper">Je veux aider</Link>
                        </li>
                        <li>
                            <Link to="/annonces?type=miskine">J'ai besoin d'aide</Link>
                        </li>
                        </ul>
                    </div>
                    </nav>
                </div>

            </section>

            {/* <div className="hero-about-container">
                    <div>
                        <h1>About HelpMate</h1>
                        <p>Text...</p>
                    </div>
                    <div>
                        <h1>Comment ça marche?</h1>
                        <p>Text...</p>
                    </div>
            </div> */}

<div className="tile is-ancestor">
  <div className="tile is-vertical is-8">
    <div className="tile">
      <div className="tile is-parent is-vertical">
        <article className="tile is-child notification is-primary">
          {/* <p className="title">Toutes les annonces</p>
          <p className="subtitle">Top tile</p> */}
          <AdsDisplayed />

        </article>
        {/* <article className="tile is-child notification is-warning">
          <p className="title">...tiles</p>
          <p className="subtitle">Bottom tile</p>
        </article> */}
      </div>
      <div className="tile is-parent">
        <article className="tile is-child notification is-info">
          <p className="title">La visite de courtoisie</p>
          <p className="subtitle">Pour aider les personnes âgées en perte d'autonomie ou tout simplement les aider à lutter contre la solitude et l'isolement...</p>
          <p></p>
          <figure className="image is-4by3">
            <img src="/blurred-retirement-home-concept_23-2147788024.jpg" />
          </figure>
        </article>
      </div>
    </div>
    <div className="tile is-parent">
      <article className="tile is-child notification is-danger">
        <p className="title">Comment ça marche ?</p>
        <p className="subtitle">Aligned with the right tile</p>
        <div className="content">
            content ........
        </div>
      </article>
    </div>
  </div>
  <div className="tile is-parent">
    <article className="tile is-child notification is-success">
      <div className="content">
        <p className="title">A propos</p>
        {/* <p className="subtitle"></p> */}
        <div className="content">
        Nous avons tous déjà eu recours à l'entraide dans notre vie, et cette notion est bien plus présente dans notre quotidien que nous le pensons. En effet, elle entre en jeu dans notre vie de tous les jours, dans notre vie privée, au sein de notre famille, au travail, etc..
        L'entraide ne date pas d'hier, l'être humain était autrefois l’espèce la plus coopérative du monde vivant, cela à cause de (ou grâce à) toutes les contraintes auxquelles il était exposé. C’est notre vulnérabilité qui nous a rendu forts, qui nous a obligé à prendre soin des autres, à nous réunir en clans, à coopérer.
        L’entraide est profondément ancrée en nous. Nous sommes une espèce "ultrasociale".
        Sauf que cette fois, la possibilité même d’entraide semble nous filer entre les doigts ! 
        C'est pourquoi nous avons pensé à développer HelpMate afin de mobilier les citoyens...
        </div>
      </div>
    </article>
  </div>
</div>

        </>
    )
}
