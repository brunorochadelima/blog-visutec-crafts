import React from 'react';
import listaCards from 'data/cards.json';
import Card from './Card';
import 'styles/Tema.scss';
import styles from 'components/cards/GridCards.module.scss';
import cards from 'data/cards.json';

interface Props {
  busca: string;
}

export default function GridCards(props: Props) {
  const { busca } = props;
  const [lista, setLista] = React.useState(cards);

  function testaBusca(title: string) {
    const regex = new RegExp(busca, 'i');
    return regex.test(title);
  }

  React.useEffect(() => {
    const novaLista = cards.filter((item) => testaBusca(item.title));
    setLista(novaLista);
  }, [busca]);

  return (
    <div className="container">
      <div className={styles.grid_card}>
        {lista.map((item) => (
          <div key={item.id}>
            <Card {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
