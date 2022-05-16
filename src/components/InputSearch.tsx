import React from 'react';
import styles from 'components/InputSearch.module.scss';
import { RiSearch2Line } from 'react-icons/ri';

export default function InputSearch() {
  return (
    <div className={styles.buscador}>
      <input type="search" placeholder="Buscar post" />
      <RiSearch2Line size={25} />
    </div>
  );
}
