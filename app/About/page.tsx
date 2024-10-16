import styles from './about.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Us</h1>
      <p className={styles.description}>
      Welcome to TECH.com . My name is IMAD UL ISLAM. This platform is created for Learning purposes.
      Our mission is to empower learners of all levels with hands-on, practical courses in software development, data science, AI, and more.
      Whether you're just starting or enhancing your skills, my goal is to make learning engaging, accessible, and relevant to the latest industry trends. 
      Every course is designed with a project-based approach to inspire, challenge, and elevate your tech journey.
      <br /><br /> 
      Join us today, and let's build the future together!

      </p>
      {/* <img src="about-image.jpg" alt="About Us" className={styles.image} /> */}
    </div>
  );
}
