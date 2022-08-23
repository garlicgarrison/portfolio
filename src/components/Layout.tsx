import React from "react";
import PropTypes from "prop-types";
import Navbar from "./Navbar";
import * as styles from "../styles/Layout.module.scss";

const Layout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      <div className={styles.layout_div}>
        <main>{children}</main>
      </div>
      <footer></footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
