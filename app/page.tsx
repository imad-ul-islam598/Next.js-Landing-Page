
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Welcome to TECH.com</h1>
        <p className={styles.subtitle}>
          Empowering you with knowledge and skills for a brighter future.
        </p>
        {/* <img
          src="Hero-image.jpg" // Correct path to hero image
          alt="Hero Image"
          className={styles.heroImage}
        /> */}
      </div>

      <section className={styles.features}>
        <div className={styles.feature}>
          <img
            src="image1.jpg" 
            alt="Feature 1"
            className={styles.featureImage}
          />
          <h2 className={styles.featureTitle}>Artificial Intelligence</h2>
          <p className={styles.featureDescription}>
          Learn the fundamentals of AI, including machine learning, neural networks, and natural language processing. 
          This course equips you with the knowledge to build smart systems and applications.
          </p>
        </div>

        <div className={styles.feature}>
          <img
            src="image2.jpg" 
            alt="Feature 2"
            className={styles.featureImage}
          />
          <h2 className={styles.featureTitle}>Cyber Security</h2>
          <p className={styles.featureDescription}>
          Dive into the world of cybersecurity to understand threats, vulnerabilities, and defense mechanisms. 
          Gain practical skills to protect systems, networks, and data from cyber attacks.
          </p>
        </div>

        <div className={styles.feature}>
          <img
            src="image3.jpg" 
            alt="Feature 3"
            className={styles.featureImage}
          />
          <h2 className={styles.featureTitle}>SEO</h2>
          <p className={styles.featureDescription}>
          Master the art of optimizing websites to rank higher on search engines. 
          This course covers keyword research, on-page and off-page SEO, and strategies to increase online visibility and traffic.
          </p>
        </div>
      </section>
    </div>
  );
}
