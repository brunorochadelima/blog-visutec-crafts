import BannerHeader from 'components/BannerHeader';
import GridCards from 'components/cards/GridCards';
import Header from 'components/Header';
import React from 'react';
import styles from 'pages/Home.module.scss';
import 'styles/Tema.scss';

export default function Home() {
  const [busca, setBusca] = React.useState('');

  function exibirBanner() {
    if (busca.length === 0) {
      return <BannerHeader />;
    }
  }

  return (
    <>
      <Header busca={busca} setBusca={setBusca} />
      {exibirBanner()}
      <GridCards busca={busca} />
      <div className="block">
        <div className={styles.imagemFooter}></div>
      </div>
    </>
  );
}
