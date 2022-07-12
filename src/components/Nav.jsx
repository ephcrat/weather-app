import React from "react";
import SearchBar from "./SearchBar.jsx";
import styles from "../styles/Nav.module.css";
import { Link } from "react-router-dom";
import About from "./About";

function Nav({ onSearch }) {
  return (
    <nav className={styles.nav}>
      <Link className={styles.logo} to="/">
        <h1>Weather Forecast</h1>
      </Link>
      <Link to="/about" className={styles.about}>
        <span>About</span>
      </Link>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}

export default Nav;
