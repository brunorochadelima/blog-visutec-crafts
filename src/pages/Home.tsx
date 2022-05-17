import BannerHeader from 'components/BannerHeader';
import GridCards from 'components/cards/GridCards';
import Header from 'components/Header';
import React from 'react';

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
    </>
  );
}