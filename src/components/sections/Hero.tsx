import React, { useRef, useEffect, useState } from "react";
import * as styles from "../../styles/sections/Hero.module.scss";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero_section}>
      <div className={styles.hero_intro}>
        <span className={styles.greeting}>Hi, my name is</span>
        <br />
        <span className={styles.hero_name}>Steven Jang</span>
        <br />
        <span className={styles.software_engineer}>Software Engineer</span>
        <br />
        <span className={styles.hero_elab}>
          I am a software engineer based in Los Angeles, CA specializing in
          web/mobile applications
        </span>
      </div>
    </section>
  );
}
