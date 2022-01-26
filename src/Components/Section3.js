import React from 'react';
import styles from './Section3.module.css';

const Section3 = () => {
  return <div className={styles.section3}>
      <h1>Don't take our <span>word</span></h1>
      <p>Read what our past customers said about our cleaning and services.</p>
      <div className={styles.paragraph}>
        <div className={styles.content}>
          <div>
            <h1><i class="fa fa-quote-left" aria-hidden="true"></i></h1>
            <p>
              Maid Services NYC is a wonderful service. I utilized their services to clean a one bedroom apartment 
              I was staying in NYC after throwing a get together. They were prompt, left the place spotless, and very professional.</p>
          </div>
          <h2>Sandra</h2>
          <p>Marketing Staff, New York</p>
        </div>
        <div className={styles.content}>
          <div>
            <h1><i class="fa fa-quote-left" aria-hidden="true"></i></h1>
            <p>
            They did such a good job. Whether you want to give a unique gift or have 
            your own home cleaned, Maid for you provides a large range of top-notch services that I highly recommend to anyone.</p>
          </div>
          <h2>Samantha</h2>
          <p>Physical Therapist, Manhattan</p>
        </div>
        <div className={styles.content}>
          <div>
            <h1><i class="fa fa-quote-left" aria-hidden="true"></i></h1>
            <p>
            I had them out to help me clean my new place for an office dinner I was having. I was very happy 
            with the results. Jennifer came to the location on time. It is such a treat to have the home professionally cleaned.</p>
          </div>
          <h2>Jessica</h2>
          <p>Photographer, New York</p>
        </div>
      </div>
  </div>;
};

export default Section3;
