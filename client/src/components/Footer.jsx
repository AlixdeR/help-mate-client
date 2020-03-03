import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import "../styles/footer.css";

const LinkedinIcon = <FontAwesomeIcon icon={faLinkedin} />;

const Footer = () => (
  <div>
    <footer className="footer">
      <div className="content has-text-centered">
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
    </footer>
  </div>
)

export default Footer
