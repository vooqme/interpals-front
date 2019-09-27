import React from 'react';

import styles from './Button.module.scss';

export default function Button({children, innerOffsetX}) {
  return (
    <button className={styles.btn}
            style={{
              paddingLeft: innerOffsetX,
              paddingRight: innerOffsetX
            }}>
      {children}
    </button>
  );
}
