import React from 'react';
import cards from 'data/cards.json';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Pagina404 from './Pagina404';

export default function Post() {
  const { id } = useParams();
  const post = cards.find((item) => item.id === Number(id));
  if (!post) {
    return <Pagina404 />;
  }

  return (
    <section>
      <article>
        <h1>{post.title}</h1>
      </article>
    </section>
  );
}
