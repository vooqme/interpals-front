import React from 'react';

import styles from './Header.module.scss';
import logoIcon from './logo.svg';
import cartIcon from './cart.svg';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrap}>
        <img src={logoIcon} alt=""/>
        Front-end Developer Test Task
        <img src={cartIcon} alt=""/>
      </div>
    </header>
  );
}
