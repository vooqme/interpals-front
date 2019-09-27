import React from 'react';

import Logo from 'components/Logo/Logo';
import CartIcon from 'icons/cart.svg';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrap}>
        <Logo/>
        <div className={styles.cart}>
          <CartIcon/>
          <span className={styles.cartCount}>3</span>
        </div>
      </div>
    </header>
  );
}
