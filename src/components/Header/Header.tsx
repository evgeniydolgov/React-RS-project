import React, { Component } from "react";
import styles from "./Header.module.css";
import reactImg from "../../assets/react.svg";

export class Header extends Component {
  render() {
    return (
      <>
        <div className={styles.container}>
          <div className={styles.header}>
            <ul className={styles.header__list}>
              <li>Main Page</li>
              <li>About Us</li>
            </ul>
            <div className={styles.logo}>
              <img src={reactImg} alt="react image" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
