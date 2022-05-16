import React from 'react';
import 'styles/Tema.scss';
import {CardPost} from 'types/CardPost';

export default function Card(props: CardPost) {
  const { photo, date, title, resume } = props;

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
            <p className="title is-4">{title}</p>
          </div>
        </div>
        <div className="content has-text-grey-dark">
          {resume}
          <p className="pb-2" />
          <div className="is-flex is-justify-content-space-between">
            <time>{date}</time>
            <p className="has-text-primary ">Continue Lendo ❯</p>
          </div>
        </div>
      </div>
    </div>
  );
}
