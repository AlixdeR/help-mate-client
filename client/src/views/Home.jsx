import React from 'react'
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

        <hr/>
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
          <p className="title">Toutes les annonces</p>
          <p className="subtitle">Top tile</p>
        </article>
        {/* <article className="tile is-child notification is-warning">
          <p className="title">...tiles</p>
          <p className="subtitle">Bottom tile</p>
        </article> */}
      </div>
      <div className="tile is-parent">
        <article className="tile is-child notification is-info">
          <p className="title">Middle tile</p>
          <p className="subtitle">With an image</p>
          <figure className="image is-4by3">
            <img src="https://bulma.io/images/placeholders/640x480.png" />
          </figure>
        </article>
      </div>
    </div>
    <div className="tile is-parent">
      <article className="tile is-child notification is-danger">
        <p className="title">Wide tile</p>
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
        <p className="title">Tall tile</p>
        <p className="subtitle">With even more content</p>
        <div className="content">
            content ........
        </div>
      </div>
    </article>
  </div>
</div>

        </>
    )
}
