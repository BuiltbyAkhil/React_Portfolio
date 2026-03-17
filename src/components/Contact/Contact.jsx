import React from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.bgGlow} />
      <div className={styles.bgGrid} />

      <span className={styles.label}>📬 Get in touch</span>
      <h2 className={styles.title}>LET'S CONNECT</h2>
      <p className={styles.subtitle}>
        Open to internships, entry-level roles, and exciting freelance projects.
        Drop me a message — I respond fast.
      </p>

      <div className={styles.cards}>
        <a href="mailto:akhilbharanikkavu@gmail.com" className={styles.card}>
          <div className={`${styles.cardIcon} ${styles.emailIcon}`}>✉️</div>
          <div className={styles.cardText}>
            <span className={styles.cardLabel}>Email</span>
            <span className={styles.cardValue}>akhilbharanikkavu@gmail.com</span>
          </div>
        </a>

        <a href="https://www.linkedin.com/in/akhil-m-28a918369" target="_blank" rel="noreferrer" className={styles.card}>
          <div className={`${styles.cardIcon} ${styles.linkedinIcon}`}>💼</div>
          <div className={styles.cardText}>
            <span className={styles.cardLabel}>LinkedIn</span>
            <span className={styles.cardValue}>linkedin.com/in/akhil-m</span>
          </div>
        </a>

        <a href="https://github.com/BuiltbyAkhil" target="_blank" rel="noreferrer" className={styles.card}>
          <div className={`${styles.cardIcon} ${styles.githubIcon}`}>🐙</div>
          <div className={styles.cardText}>
            <span className={styles.cardLabel}>GitHub</span>
            <span className={styles.cardValue}>github.com/BuiltbyAkhil</span>
          </div>
        </a>
      </div>

      <a href="mailto:akhilbharanikkavu@gmail.com" className={styles.cta}>
        Say Hello ✨
      </a>

      <div className={styles.footer}>
        <p className={styles.footerText}>
          Designed &amp; Built by <span>Akhil M</span> · 2025 · Kollam, Kerala
        </p>
      </div>
    </footer>
  );
};
