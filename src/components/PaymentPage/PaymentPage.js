import React from 'react';

import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs';
import OrderSummary from 'components/OrderSummary/OrderSummary';
import OrderForm from 'components/OrderForm/OrderForm';

import goods from '../../mocks';
import styles from './PaymentPage.module.scss';

export default function PaymentPage() {
  return (
    <div className={styles.wrap}>
      <div className={styles.colForm}>
        <Breadcrumbs/>
        <OrderForm/>
      </div>
      <div className={styles.colSummary}>
        <OrderSummary goods={goods}/>
      </div>
    </div>
  );
}
