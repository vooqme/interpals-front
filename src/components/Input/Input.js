import React from 'react';

import styles from './Input.module.scss';

export default function Input({placeholder, type='text'}) {
  return (
    <input className={styles.input}
           type={type}
           placeholder={placeholder}/>
  );
}
