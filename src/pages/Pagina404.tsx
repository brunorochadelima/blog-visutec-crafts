import React from 'react';
import 'styles/Tema.scss';
import Img404 from 'assets/ilustracao-404.svg';
import Header from 'components/Header';
import 'styles/Tema.scss';
import styles from 'pages/Pagina404.module.scss';
import { useNavigate } from 'react-router-dom';

export default function Pagina404() {
  const navigate = useNavigate();
  const [busca, setBusca] = React.useState('');
  return (
    <div className="container has-text-centered">
      <Header busca={busca} setBusca={setBusca} />
      <div className="column">
        <div className={styles.container_imagem404}>
          <img src={Img404} alt="Ilustração 404" />
          <button
            className="button is-primary is-rounded is-medium mb-5"
            onClick={() => navigate(-1)}
          >
            {'❮ Voltar'}
          </button>
        </div>
      </div>
    </div>
  );
}
