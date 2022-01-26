import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return <div>
      <nav className={styles.navbar}>
          <ul>
              <li className={styles.cleanly}>Cleanly</li>
              <li className={styles.book}><a href="#">Book a Cleaning</a></li>
              <li><a href="#">Our Services</a></li>
              <li><a href="#">How it works?</a></li>
          </ul>
      </nav>
  </div>;
};

export default Navbar;
