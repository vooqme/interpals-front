import React from 'react';

import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

import styles from './OrderForm.module.scss';

export default function OrderForm() {
  return (
    <div className={styles.orderForm}>
      <h2>Payment</h2>
      <form action="/">
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="1">Billing Contact</label>
          <Input placeholder="Name"/>
          <Input placeholder="Email Address" type="email"/>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="1">Billing Address</label>
          <Input placeholder="Street"/>
          <Input placeholder="Apartment"/>
          <Input placeholder="City"/>
        </div>
        <Button>Continue</Button>
      </form>
    </div>
  );
}
