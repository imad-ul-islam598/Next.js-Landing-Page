import styles from './contact.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Us</h1>
      <form className={styles.form}>
        <input type="text" className={styles.input} placeholder="Your Name" required />
        <input type="email" className={styles.input} placeholder="Your Email" required />
        <textarea className={styles.textarea} placeholder="Your Message" required></textarea>
        <button type="submit" className={styles.button}>Send Message</button>
      </form>
    </div>
  );
}
