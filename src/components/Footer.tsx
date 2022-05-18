import React from 'react';
import 'styles/Tema.scss';
import logo from 'assets/logo-visutec-crafts.svg';
import instagram from 'assets/icon-instagram.svg';
import facebook from 'assets/icon-facebook.svg';
import styles from 'components/Footer.module.scss';

export default function Footer() {
  return (
    <footer className="has-background-link-light">
      <div className="container ">
        <div className="columns is-vcentered has-text-centered ">
          <div className="column is-narrow">
            <img src={logo} alt="" className={styles.logo}/>
          </div>
          <div className="column">
            <p className="is-size-6">
            © Copyright 2022 Todos direitos reservados - A Visutec Crafts é uma
              marca do Grupo Multivisi
            </p>
          </div>
          <div className="column is-narrow">
            <a
              className="mr-4"
              href="https://www.instagram.com/visuteccrafts/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagram} alt="instagram" className={styles.social_icons}/>
            </a>
            <a
              href="https://www.facebook.com/visuteccrafts/?ref=py_c/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebook} alt="facebook" className={styles.social_icons} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
