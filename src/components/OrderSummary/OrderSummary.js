import React from 'react';
import classNames from 'classnames';

import styles from './OrderSummary.module.scss';

export default function OrderSummary({goods}) {
  return (
    <div>
      <h3 className={styles.title}>
        Order Summary
        <span className={styles.editOrder}>edit order</span>
      </h3>
      <div className={styles.goodsList}>
        {goods.map((item) => (
          <div key={item.id} className={styles.goodsListItem}>
            <div className={styles.goodsListImg}>
              <img src={item.img} alt=""/>
            </div>
            <div className={styles.goodsListContent}>
              <div className={styles.goodsListTitle}>
                <span>{item.name}</span>
                <span>${item.price}</span>
              </div>
              <div>
                {item.color}
              </div>
              <div>
                Quantity: 1
              </div>
            </div>
          </div>
        ))}
        <div className={classNames(styles.goodsListItem, styles.goodsSummary)}>
          <div className={styles.goodsListTitle}>
            <span>Subtotal</span>
            <span>$235</span>
          </div>
          <div className={styles.goodsListTitle}>
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className={styles.goodsListTitle}>
            <span>Taxes</span>
            <span>$12.12</span>
          </div>
        </div>
        <div className={classNames(styles.goodsListTitle, styles.goodsTotal)}>
          <span>Subtotal</span>
          <span>$235</span>
        </div>
      </div>
    </div>
  );
}
