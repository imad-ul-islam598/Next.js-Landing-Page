
import styles from './services.module.css';

export default function Services() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Services</h1>
      <ul className={styles.servicesList}>
        <li className={styles.serviceItem}>Online Courses</li>
        <li className={styles.serviceItem}>Workshops</li>
        <li className={styles.serviceItem}>Mentorship Programs</li>
        <li className={styles.serviceItem}>In-Demand Tech Skills</li>
      </ul>
      {/* <img src="image1.jpg" alt="Our Services" className={styles.image} /> */}
    </div>
  );
}
