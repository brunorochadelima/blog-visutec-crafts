import React from 'react';
import listaCards from 'data/cards.json';
import Card from './Card';
import 'styles/Tema.scss';
import styles from 'components/cards/GridCards.module.scss';

export default function GridCards() {
  return (
    <div className="container">
      <div className={styles.grid_card}>
        {listaCards.map((item) => (
          <div key={item.id}>
            <Card {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
