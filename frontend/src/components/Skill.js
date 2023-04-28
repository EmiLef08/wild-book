import React from "react";
import styles from "./Skill.module.css";

const Skill = ({ title, vote }) => {
    return (
        <div className={styles["skill-container"]}>
            <ul className={styles.skills}>
              <li>
                {title}
                <span className={styles.vote}>{vote}</span>
              </li>
            </ul>
        </div>
    );
};

export default Skill;