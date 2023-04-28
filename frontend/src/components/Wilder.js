import React from "react";
import styles from "./Wilder.module.css";
import blank_profile from "../assets/8bRN5ga.png";
import Skill from "./Skill";
import PropTypes from "prop-types";
import axios from "axios";

function Wilder({ name, city, skills, refresh }) {
  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/wilder/`)
        .then(()=> { 
            refresh()            
        })
        .catch((error) => {
        console.error(error)
    });
  };

  return (
  <div>
    <section className={styles["card-row"]}>
    <article className={styles.card}>
      <img src={blank_profile} alt="Jane Doe Profile" />
      <button type="button" onClick={() => handleDelete()} className={styles.trash}>Delete</button>
      <h3>{name}</h3>
      <h4>{city}</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <h4>Wild Skills</h4>
      <ul className="skills">
        {skills.map((skill, index) => (
          <Skill key={index} title={skill.title} votes={skill.votes} />
        ))}
      </ul>
    </article>
    </section>
  </div>
)
};

Wilder.propTypes = {
  key : PropTypes.number,
  id : PropTypes.number,
  name : PropTypes.string.isRequired,
  city : PropTypes.string.isRequired,
  skills : PropTypes.arrayOf(PropTypes.object).isRequired,
  refresh: PropTypes.func.isRequired,

};

export default Wilder;
