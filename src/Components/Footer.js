import React from 'react';
import styles from './CSS/Footer.module.css';

const Footer = () => {
  return <div className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.listContainer}>
        <h1>Quick Links</h1>
        <ul>
          <li>Help</li>
          <li>About</li>
          <li>Press</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className={styles.listContainer}>
        <h1>Legal Stuff</h1>
        <ul>
          <li>Terms of use</li>
          <li>Cookies</li>
          <li>Privacy Policy</li>
          <li>Security Policy</li>
          <li>Money back gurantee</li>
        </ul>
      </div>
      <div className={styles.listContainer}>
        <h1>Our Locations</h1>
        <ul>
          <li>Boston</li>
          <li>Chicago</li>
          <li>London</li>
          <li>Los Angeles</li>
          <li>New York</li>
        </ul>
      </div>
      <div  className={styles.listContainer}>
        <h2>SUBSCRIBE</h2>
        <div className={styles.form}>
          <input type="text" placeholder="Enter your email"/>
          <button><i class="fa fa-angle-right" aria-hidden="true"></i></button>
        </div>
        <div className={styles.icon}>
          <ul>
          <li><span><i class="fa fa-facebook-official" aria-hidden="true"></i></span></li>
          <li><span><i class="fa fa-instagram" aria-hidden="true"></i></span></li>
          <li><span><i class="fa fa-twitter-square" aria-hidden="true"></i></span></li>
          <li><span><i class="fa fa-linkedin-square" aria-hidden="true"></i></span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>;
};

export default Footer;
