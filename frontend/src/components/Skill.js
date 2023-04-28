import React from "react";
import styles from "./Skill.module.css";

const Skill = ({ title, vote }) => {
    return (
        <div className={styles["skill-container"]}>
              <li>
                {title}
                <span className={styles.vote}>{vote}</span>
              </li>
        </div>
    );
};

export default Skill;