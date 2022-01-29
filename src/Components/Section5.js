import React from 'react';
import styles from './CSS/Section5.module.css';
import living from '../images/image6.jpg';
import kitchen from '../images/image7.jpg';
import bathroom from '../images/image8.jpg';
import bedroom from '../images/image9.jpg';

const Section5 = () => {
  return <div className={styles.section5}>
      <div>
          <div className={styles.content}>
              <img className={styles.img1} src={living} alt='image'/>
              <div className={styles.livingbath}>
                  <h1>Make Better <span>Living Room</span></h1>
                  <h3><i class="fa fa-check" aria-hidden="true"></i> Cleaning and highrise dusting</h3>
                  <h3><i class="fa fa-check" aria-hidden="true"></i> Furniture Dusting/Vacuuming</h3>
                  <h3><i class="fa fa-check" aria-hidden="true"></i> Fixtures cleaning - A/C,Fan etc</h3>
                  <h3><i class="fa fa-check" aria-hidden="true"></i> Wall marks cleaning (Washable paint)</h3>
                  <h3><i class="fa fa-check" aria-hidden="true"></i> Floor scrubbing / Dry and Wet mop</h3>
                  <h3><i class="fa fa-check" aria-hidden="true"></i> Carpet vacuuming</h3>
              </div>
          </div>
          <div className={styles.content}>
              <div className={styles.bedkitchen}>
                  <h1>Your Beautiful <span>Kitchen</span></h1>
                  <h3><i class="fa fa-check" aria-hidden="true"></i> Wash and scrub sink</h3>
                  <h3><i class="fa fa-check" aria-hidden="true"></i> Wash cabinet faces and appliances</h3>
                  <h3><i class="fa fa-check" aria-hidden="true"></i> Dust and wipe all reachable surfaces</h3>
                  <h3><i class="fa fa-check" aria-hidden="true"></i> Wipe mirrors and glass fixtures</h3>
                  <h3><i class="fa fa-check" aria-hidden="true"></i> Vacuum and mop all floors</h3>
                  <h3><i class="fa fa-check" aria-hidden="true"></i> Take out trash and recyclables</h3>
              </div>
              <img className={styles.img2} src={kitchen} alt='image'/>
          </div>
          <div className={styles.content}>
              <div className={styles.livingbath}>
                  <h1>Tidy <span>Bathroom</span></h1>
                  <h3><i class="fa fa-check" aria-hidden="true"></i> Wash and sanitize toilet, shower and sink</h3>
                  <h3><i class="fa fa-check" aria-hidden="true"></i> Dust and wipe all reachable surfaces</h3>
                  <h3><i class="fa fa-check" aria-hidden="true"></i> Wipe door handles and light switches</h3>
                  <h3><i class="fa fa-check" aria-hidden="true"></i> Wipe mirrors and glass fixtures</h3>
                  <h3><i class="fa fa-check" aria-hidden="true"></i> Vacuum and mop all floors</h3>
                  <h3><i class="fa fa-check" aria-hidden="true"></i> Take out trash and recyclables</h3>
              </div>
              <img className={styles.img1} src={bathroom} alt='image'/>
          </div>
          <div className={styles.content}>
              <div className={styles.bedkitchen}>
                  <h1>The Perfect <span>Bedroom</span></h1>
                  <h3><i class="fa fa-check" aria-hidden="true"></i> Make beds and change linens</h3>
                  <h3><i class="fa fa-check" aria-hidden="true"></i> Dust and wipe all reachable surfaces</h3>
                  <h3><i class="fa fa-check" aria-hidden="true"></i> Wipe door handles and light switches</h3>
                  <h3><i class="fa fa-check" aria-hidden="true"></i> Wipe mirrors and glass fixtures</h3>
                  <h3><i class="fa fa-check" aria-hidden="true"></i> Vacuum and mop all floors</h3>
                  <h3><i class="fa fa-check" aria-hidden="true"></i> Take out trash and recyclables</h3>
              </div>
              <img className={styles.img2} src={bedroom} alt='image'/>
          </div>
      </div>
  </div>;
};

export default Section5;
