import React from 'react';
import 'styles/Tema.scss';
import listaCards from 'data/cards.json';
import {CardPost} from 'types/CardPost';

export default function Card(props: CardPost) {
  const { photo } = props;

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={photo} alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content ">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">John Smith lorem ipsum</p>
          </div>
        </div>
        <div className="content has-text-grey-dark">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris.
          <p className="pb-2" />
          <div className="is-flex is-justify-content-space-between">
            <time>1 Jan 2016</time>
            <p className="has-text-primary ">Continue Lendo ❯</p>
          </div>
        </div>
      </div>
    </div>
  );
}
