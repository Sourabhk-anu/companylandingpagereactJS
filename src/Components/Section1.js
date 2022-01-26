import React from 'react';
import styles from './Section1.module.css';

const Section1 = () => {
  return <div className={styles.section1}>
      <h1>Cleaning Made Easy</h1>
      <p>Book expert home cleaners and handymen at a moment's notice. Just pick a time and we’ll do the rest.</p>
      <div className={styles.form}>
        <input className={styles.email} type='email' placeholder='Enter your email'/>
        <input className={styles.number} type='number' placeholder='Zip Code'/>
        <button className={styles.button}>Continue <i class='fa fa-angle-right'></i></button>
      </div>
  </div>;
};

export default Section1;
