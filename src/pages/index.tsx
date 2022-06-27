import * as React from "react";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Hero from "../components/sections/Hero";
import * as styles from "../styles/Home.module.scss";

// styles
export default function Main() {
  return (
    <main className={styles.Container}>
      <Layout>
        <Hero />
      </Layout>
    </main>
  );
}
