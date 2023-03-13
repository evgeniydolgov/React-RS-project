import React, { Component } from "react";
import styles from "./Header.module.css";

export class Header extends Component {
  render() {
    return (
      <>
        <div className={styles.container}>
          <div className={styles.header}>Header</div>
        </div>
      </>
    );
  }
}

export default Header;
