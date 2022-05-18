import React from 'react';
import 'styles/Tema.scss';
import { CardPost } from 'types/CardPost';
import styles from './Card.module.scss';

export default function Card(props: CardPost) {
  const { photo, date, title, resume } = props;

  return (
    <div className={styles.card}>
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img src={photo} alt="Placeholder image" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <p className="title is-5">{title}</p>
          </div>
          <div className="content has-text-grey-dark">
            {resume}
            <hr className="card-footer" />
            <footer className="is-flex is-justify-content-space-between">
              <time>{date}</time>
              <p className="has-text-primary ">Continue Lendo ❯</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
