import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from "../auth/useAuth";


export default function NavBar() {

    const { isLoading, currentUser } = useAuth();
  
    if (isLoading) return null;
  
    return (
        <div>
            <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <div className="navbar-item"><strong>HelpMate</strong></div>

    <div role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </div>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <div className="button is-primary">
            <Link  to='/signup'><strong >S'inscrire</strong></Link>
          </div>
          <div className="button is-light">
            Se connecter
          </div>
        </div>
      </div>
      {currentUser && <div className="navbar-item has-dropdown is-hoverable">
        <div className="navbar-link">
          Mon Compte
        </div>
         <div className="navbar-dropdown">
          <div className="navbar-item">
          <Link  to={`/profil/${currentUser._id}/modifier-mon-compte`}>Mon profil</Link>
          </div>
          <div className="navbar-item">
            Mes annonces
          </div>
          <div className="navbar-item">
            Mes messages
          </div>
          <hr className="navbar-divider"/>
          <div className="navbar-item">
            Se déconnecter
          </div>
        </div>
      </div>}
    </div>
  </div>
</nav>
        </div>
    )
}
