import React from "react";
import axios from "axios";
import { useState } from "react";
import PropTypes from "prop-types";

const AddWilders = () => {
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    return (
        <form
        onSubmit={(e) => {
            e.preventDefault();
            axios.post("http://localhost:8000/api/wilder", { name, city });
        }}  >
            <label>Name :</label>
            <input type="text" value={name} onChange={(e) => {setName(e.target.value);}} />
            <br />
            <label>City :
            </label>
            <input type="text" value={city} onChange={(e) => {setCity(e.target.value);}} />
            <br />
            <button>Add Wilder</button>
        </form>
    );
};

AddWilders.propTypes = {
    refresh: PropTypes.func.isRequired,
};

export default AddWilders;