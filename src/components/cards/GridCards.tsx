import React from 'react';
import Card from './Card';
import 'styles/Tema.scss';
import styles from 'components/cards/GridCards.module.scss';
import cards from 'data/cards.json';
import { useNavigate } from 'react-router-dom';
import { CardPost } from 'types/CardPost';
import { useContext } from 'react';
import { PesquisaContext } from 'context/Pesquisa';

interface Props {
  busca: string;
}

export default function GridCards() {
  const { busca, setBusca } = useContext(PesquisaContext);

  const navigate = useNavigate();
  //const { busca } = props;
  const [lista, setLista] = React.useState(cards);

  function testaBusca(title: string) {
    const regex = new RegExp(busca, 'i');
    return regex.test(title);
  }

  React.useEffect(() => {
    const novaLista = cards.filter((item) => testaBusca(item.title));
    setLista(novaLista);
  }, [busca]);

  function redirecionaParaDetalhes(post: CardPost) {
    navigate(`/post/${post.id}`, { state: { post } });
  }

  return (
    <div className="container">
      <div className={styles.grid_card}>
        {lista.map((item) => (
          <div key={item.id} onClick={() => redirecionaParaDetalhes(item)}>
            <Card {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
