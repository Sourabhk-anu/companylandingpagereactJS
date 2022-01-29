import React from 'react';
import styles from './CSS/Navbar.module.css';

const Navbar = () => {
  return <div>
      <header className={styles.header}>
            <div className={styles.logo}>Cleanly</div>
            <input className={styles.menubtn} type="checkbox" id="menu-btn" />
            <label className={styles.menuicon} for="menu-btn"><span className={styles.navicon}></span></label>
            <ul className={styles.menu}>
                <div className={styles.listitem}>
                <li><a href="#">How it works?</a></li>
              <li><a href="#">Our Services</a></li>
              <li className={styles.book}><a href="#">Book a Cleaning</a></li>
                </div>
            </ul>
          </header>
  </div>;
};

export default Navbar;
