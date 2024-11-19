import React from "react";
import styles from "./Homepage.module.css";

import Header from "../../components/layout/Header/Header";
import Content from "../../components/content/Content";

function Homepage() {
  return (
    <div className={styles.homepage}>
      <Header></Header>
      <Content />
    </div>
  );
}

export default Homepage;
