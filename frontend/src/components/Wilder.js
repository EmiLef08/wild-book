import React from "react";
import styles from "./Wilder.module.css";
import blank_profile from "../assets/8bRN5ga.png";
import Skill from "./Skill";

const Wilder = ({ name }) => (
  <div>
    <section className={styles["card-row"]}>
      <article className={styles.card}>
        <img src={blank_profile} alt="Jane Doe Profile" />
        <h3>{ name }</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
        <h4>Wild Skills</h4>
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </article>
    </section>
  </div>
);


export default Wilder;
