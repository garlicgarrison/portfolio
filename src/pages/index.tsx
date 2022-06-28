import * as React from "react";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import About from "../components/sections/About";
import Hero from "../components/sections/Hero";
import * as styles from "../styles/Home.module.scss";

export default function Main() {
  return (
    <main>
      <Layout>
        <Hero />
        <About />
      </Layout>
    </main>
  );
}
