import React from 'react';
import Header from './components/Header/Header';

import styles from './App.module.scss'
import PaymentPage from './components/PaymentPage/PaymentPage';

function App() {
  return (
    <div className={styles.app}>
      <Header/>
      <div className={styles.content}>
        <PaymentPage/>
      </div>
    </div>
  );
}

export default App;
