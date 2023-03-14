import React, { Component } from "react";
import styles from "./Footer.module.css";
import githubImg from "../../assets/github.svg";
import rsLogo from "../../assets/rs-logo.svg";

export class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <ul className={styles.footer__wrapper}>
          <li className={styles.github}>
            <a href="https://github.com/evgeniydolgov/">
              <img src={githubImg} alt="github image" />
            </a>
          </li>
          <li className={styles.year}>{new Date().getFullYear()}</li>
          <li className={styles.rsSchool}>
            <a href="https://rs.school/">
              <img src={rsLogo} alt="RS School logotype" />
            </a>
          </li>
        </ul>
      </footer>
    );
  }
}
