import React from "react";
import Link from "next/link";

import Image from "next/image";

import styles from "./Header.module.css";
import logo from "../../../assets/logo.png";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerRow}>
        <div className={styles.logo}>
          {/* <Image
            src={logo}
            alt="Picture of the author"
            // width={500}
            height={50}
            automatically
            provided
            placeholder="blur" // Optional blur-up while loading
          /> */}
          Frigg.
          <spam style={{ fontWeight: "bold", color: "#FFF" }}>dev</spam>
        </div>
        <nav>
          <ul className={styles.menu}>
            <li className={styles.menuItem}>
              <Link href="/">Home</Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/about">About</Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
