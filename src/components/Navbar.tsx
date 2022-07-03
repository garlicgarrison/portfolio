import React from "react";
import * as styles from "../styles/Navbar.module.scss";

console.log(styles);

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.nav_container}>
        <span className={styles.my_name}>Steven Jang</span>
        <ul className={styles.navbar_list}>
          <li className={styles.about_header}>
            <a>Resume</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
