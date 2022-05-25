import React from 'react';
import BannerHeader from 'components/BannerHeader';
import GridCards from 'components/cards/GridCards';
import styles from 'pages/Home.module.scss';
import 'styles/Tema.scss';
import { useContext } from 'react';
import { PesquisaContext } from 'context/Pesquisa';

export default function Home() {
  //const [busca, setBusca] = React.useState('');
  const { busca } = useContext(PesquisaContext);

  function exibirBanner() {
    if (busca.length === 0) {
      return <BannerHeader />;
    }
  }

  return (
    <>
      {exibirBanner()}
      <GridCards />
      <div className="block">
        <div className={styles.imagemFooter}></div>
      </div>
    </>
  );
}
