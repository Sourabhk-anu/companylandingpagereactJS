import React from 'react';
import styles from './CSS/Section2.module.css';
import client1 from '../images/image5.png';
import client2 from '../images/image2.png';
import client3 from '../images/image3.png';
import client4 from '../images/image4.png';

const Section2 = () => {
  return <div className={styles.section2}>
      <div className={styles.part1}>
      <h3><i class="fa fa-long-arrow-left" aria-hidden="true"></i> As Seen On <i class="fa fa-long-arrow-right" aria-hidden="true"></i></h3>
      <div className={styles.client}>
        <img className={styles.clientImg} src={client1} alt=''/>
        <img className={styles.clientImg} src={client2} alt=''/>
        <img className={styles.clientImg} src={client3} alt=''/>
        <img className={styles.clientImg} src={client4} alt=''/>
      </div>
      </div>
      <div className={styles.part2}>
        <h1>How it <span>works</span></h1>
        <p>We’ve made all the hardwork for making it simple for you. Here’s how it works</p>
        <div className={styles.iconDiv}>
          <div className={styles.icon}>
          <h1><i class="fa fa-address-book-o" aria-hidden="true"></i></h1>
          <h2>Book a cleaning</h2>
          <p>Click the book now button to make a booking on your preffered date and time</p>
          </div>
          <div className={styles.icon}>
          <h1><i class="fa fa-lock" aria-hidden="true"></i></h1>
          <h2>Confirm Booking</h2>
          <p>We will confirm your booking along with your instructions via secure transaction.</p>
          </div>
          <div className={styles.icon}>
          <h1><i class="fa fa-home" aria-hidden="true"></i></h1>
          <h2>We’ll Clean it</h2>
          <p>Our trusted & experienced maid will come to your door-step on the time for a cleaning</p>
          </div>
        </div>
      </div>
  </div>;
};

export default Section2;
