import React from 'react';
import '../styles/Tema.scss';
import { ReactComponent as Logo } from 'assets/logo-visutec-crafts.svg';
import instagram from 'assets/icon-instagram.svg';

export default function Header() {
  return (
    <div className="container">
      <div className="columns pt-2 is-vcentered">
        <div className="column is-narrow has-text-centered-mobile">
          <Logo />
        </div>
        <div className="column has-text-centered">
          <input type="search" />
        </div>
        <div className="column has-text-centered is-narrow">
          <a
            className="mr-3"
            href="https://www.instagram.com/visuteccrafts/"
            target="_blank" rel="noreferrer"
          >
            <img src={instagram} alt="instagram" />
          </a>
          <a href="https://www.instagram.com/visuteccrafts/" target="_blank" rel="noreferrer">
            <img src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
    </div>
  );
}
