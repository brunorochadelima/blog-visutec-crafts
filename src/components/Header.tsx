import React from 'react';
import '../styles/Tema.scss';
import { ReactComponent as Logo } from 'assets/logo-visutec-crafts.svg';
import instagram from 'assets/icon-instagram.svg';
import InputSearch from './InputSearch';
import styles from 'components/Header.module.scss';

export default function Header() {
  return (
    <div className="container">
      <div className={styles.flex}>
        <div>
          <Logo />
        </div>
        <div>
          <InputSearch />
        </div>
        <div>
          <a
            className="mr-3"
            href="https://www.instagram.com/visuteccrafts/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagram} alt="instagram" />
          </a>
          <a
            href="https://www.instagram.com/visuteccrafts/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
    </div>
  );
}
