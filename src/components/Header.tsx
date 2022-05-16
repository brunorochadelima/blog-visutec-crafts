import React from 'react';
import '../styles/Tema.scss';
import { ReactComponent as Logo } from 'assets/logo-visutec-crafts.svg';
import instagram from 'assets/icon-instagram.svg';
import facebook from 'assets/icon-facebook.svg';
import InputSearch from './InputSearch';
import styles from 'components/Header.module.scss';
import GridCards from './cards/GridCards';

interface Props {
  busca: string;
  setBusca: React.Dispatch<React.SetStateAction<string>>;
}

export default function Header({ busca, setBusca }: Props) {
  return (
    <div className="container">
      <div className={styles.flex}>
        <Logo className={styles.logo} />
        <div className="pb-4">
          <InputSearch busca={busca} setBusca={setBusca} />
        </div>
        <div className={styles.social_icons}>
          <a
            className="mr-3"
            href="https://www.instagram.com/visuteccrafts/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagram} alt="instagram" />
          </a>
          <a
            href="https://www.facebook.com/visuteccrafts/?ref=py_c/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebook} alt="instagram" />
          </a>
        </div>
      </div>
    </div>
  );
}
