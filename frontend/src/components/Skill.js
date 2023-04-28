import React from "react";
import styles from "./Skill.module.css";

const Skill = () => {
    return (
        <div className={styles["skill-container"]}>
            <ul className={styles.skills}>
              <li>
                HTML
                <span className={styles.vote}>3</span>
              </li>
            </ul>
        </div>
    )
};

export default Skill;