import React from 'react';

import LogoIcon from 'icons/logo.svg';
import styles from './Logo.module.scss';

export default function Logo() {
  return (
    <a className={styles.logo} href="/">
      <LogoIcon/>
      <span className={styles.logoText}>Front-end Developer Test Task</span>
    </a>
  );
}
