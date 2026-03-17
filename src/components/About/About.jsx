import React from "react";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.titleWrap}>
        <span className={styles.label}>👋 Who I am</span>
        <h2 className={styles.title}>About Me</h2>
      </div>
      <div className={styles.content}>

        {/* 3D Image Card */}
        <div className={styles.imageWrap}>
          <div className={styles.imageCard}>
            <img src="/about/aboutImage.svg" alt="Akhil M" className={styles.aboutImage} />
            <span className={styles.badge}>4+ Years Building 🚀</span>
          </div>
        </div>

        {/* Info cards */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={`${styles.iconWrap} ${styles.iconFront}`}>
              <img src="/about/cursorIcon.png" alt="Cursor icon" />
            </div>
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>Building responsive, cross-browser UIs with React.js, Tailwind CSS, CSS Modules, and GSAP animations — from component libraries to full landing pages.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={`${styles.iconWrap} ${styles.iconBack}`}>
              <img src="/about/serverIcon.png" alt="Server icon" />
            </div>
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>Designing and building RESTful APIs with Node.js and Express.js, integrating MongoDB databases, JWT auth, and third-party services like Firebase.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={`${styles.iconWrap} ${styles.iconUi}`}>
              <img src="/about/uiIcon.png" alt="UI icon" />
            </div>
            <div className={styles.aboutItemText}>
              <h3>UI / Motion Designer</h3>
              <p>Crafting immersive, animation-rich UIs using GSAP and Tailwind CSS — scroll-triggered effects, smooth transitions, and modern design systems.</p>
            </div>
          </li>
        </ul>

      </div>
    </section>
  );
};
