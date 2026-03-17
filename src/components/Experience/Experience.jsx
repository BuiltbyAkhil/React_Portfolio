import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <div className={styles.titleWrap}>
        <span className={styles.label}>🛠 My Stack & Journey</span>
        <h2 className={styles.title}>Experience</h2>
      </div>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={`/${skill.imageSrc}`} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
        <ul className={styles.history}>
          {history.map((item, id) => (
            <li key={id} className={styles.historyItem}>
              <img src={`/${item.imageSrc}`} alt={`${item.organisation} logo`} />
              <div className={styles.historyItemDetails}>
                <h3>{item.role} — {item.organisation}</h3>
                <p>{item.startDate} – {item.endDate}</p>
                <ul>
                  {item.experiences.map((exp, i) => <li key={i}>{exp}</li>)}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
