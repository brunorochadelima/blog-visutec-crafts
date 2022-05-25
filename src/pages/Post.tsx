import React from 'react';
import cards from 'data/cards.json';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Pagina404 from './Pagina404';
import 'styles/Tema.scss';
import styles from 'pages/Post.module.scss';
import GridCards from 'components/cards/GridCards';
import { useContext } from 'react';
import { PesquisaContext } from 'context/Pesquisa';

export default function Post() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { busca } = useContext(PesquisaContext);

  const post = cards.find((item) => item.id === Number(id));
  if (!post) {
    return <Pagina404 />;
  }

  //const [busca, setBusca] = React.useState('');

  return (
    <section className="container">

      {busca.length > 0 ? <GridCards /> : ''}

      <article className="column">
        <div className={styles.img_post}>
          <img src={post.photo} alt={post.title} />
        </div>
        <h1 className="is-size-1 py-5 has-text-dark is-size-3-mobile">
          {post.title}
        </h1>

        <p className="is-size-6 pb-5 has-text-weight-bold has-text-grey">
          Postado por Visutec Crafts <br />{' '}
          <span className="has-text-weight-normal">{post.date}</span>
        </p>
        <p className="is-size-5">{post.description.paragrafo_1}</p>
        <br />
        <p className="is-size-5"> {post.description.paragrafo_2}</p>
        <br />
        <p className="is-size-5">{post.description.paragrafo_3}</p>
        <button
          className="button is-rounded is-medium is-primary mb-6"
          onClick={() => navigate(-1)}
        >
          {'❮ Voltar'}
        </button>
      </article>
    </section>
  );
}
