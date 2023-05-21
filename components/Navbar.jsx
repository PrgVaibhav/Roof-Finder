"use client";

import Link from "next/link";
import styles from "../styles/navbar.module.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const clickHandler = () => {
    setToggle((prev) => !prev);
  };

  return (
    <header className={styles.nav_container}>
      <div className={styles.logo}>
        <h1>Roof Finder</h1>
      </div>
      <div className={styles.toggle}>
        {toggle ? (
          <RxCross2 onClick={clickHandler} />
        ) : (
          <BiMenuAltRight onClick={clickHandler} />
        )}
      </div>
      <nav>
        <ul
          className={
            toggle
              ? `${styles.nav_links} ${styles.active}`
              : `${styles.nav_links}`
          }
        >
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">About </Link>
          </li>
          <li>
            <Link href="/properties">Properties</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
