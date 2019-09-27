import React from 'react';

import styles from './Breadcrumbs.module.scss';

export default function Breadcrumbs() {
  return (
    <ul className={styles.breadcrumbs}>
      <li className={styles.breadcrumbsItem}>
        <a className={styles.breadcrumbsLink} href="/">Shipping</a>
      </li>
      <li className={styles.breadcrumbsItem}>
        <a className={styles.breadcrumbsLink} href="/">Billing</a>
      </li>
      <li className={styles.breadcrumbsItem}>
        <span className={styles.breadcrumbsLink}>Payment</span>
      </li>
    </ul>
  );
}
