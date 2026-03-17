import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.gridBg} />
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.content}>
        <span className={styles.eyebrow}>⚡ Full-Stack Developer</span>
        <h1 className={styles.title}>HI, I'M</h1>
        <span className={styles.titleAccent}>AKHIL M.</span>
        <p className={styles.description}>
          I build fast, responsive, and visually stunning web apps using
          React.js, Node.js &amp; MongoDB — from pixel-perfect UIs to
          rock-solid backends.
        </p>
        <div className={styles.btns}>
          <a href="mailto:akhilbharanikkavu@gmail.com" className={styles.contactBtn}>Contact Me</a>
          <a href="/Akhil_Resume.pdf" target="_blank" rel="noreferrer" className={styles.resumeBtn}>Resume ↗</a>
          <a href="https://github.com/BuiltbyAkhil" target="_blank" rel="noreferrer" className={styles.githubBtn}>GitHub ↗</a>
        </div>
      </div>
      <img src="/hero/heroImage.svg" alt="Akhil M" className={styles.heroImg} />
    </section>
  );
};
