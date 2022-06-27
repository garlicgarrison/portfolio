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
            <a>About</a>
          </li>

          <li className={styles.experience_header}>
            <a>Experience</a>
          </li>

          <li className={styles.projects_header}>
            <a>Projects</a>
          </li>

          <li className={styles.contact_header}>
            <a>Contact</a>
          </li>

          <li>
            <button className={styles.dropdown_menu}>
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.41 0L6 4.58L10.59 0L12 1.41L6 7.41L0 1.41L1.41 0Z"
                  fill="#64FFDA"
                />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
