import React from 'react';
import 'styles/Tema.scss';
import 'components/BannerHeader.module.scss';
import FotoCorteLaser from 'assets/produtos-corte-a-laser.png';
import styles from 'components/BannerHeader.module.scss';

export default function BannerHeader() {
  function lojaVisutecCrafts() {
    window.open('https://visuteccrafts.com.br/', '_blank');
  }
  return (
    <div className="container mt-3">
      <div
        style={{ borderRadius: '10px' }}
        className="columns is-vcentered has-text-centered-mobile has-background-link-light p-2"
      >
        <div className="column has-text-centered">
          <img src={FotoCorteLaser} alt="" />
        </div>
        <div className="column">
          <h1 className="title is-1 is-size-3-mobile">
            Descubra um universo de{' '}
            <span className="has-text-primary">possibilidades</span>{' '}
          </h1>
          <p className="subtitle">
            Transforme o seu ateliê em um grande negócio
          </p>
          <button
            className="button is-rounded is-primary is-outlined"
            onClick={lojaVisutecCrafts}
          >
            <div className={styles.particle}></div>
            Loja Visutec Crafts
          </button>
        </div>
      </div>
    </div>
  );
}
