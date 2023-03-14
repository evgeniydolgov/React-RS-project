import React, { Component } from "react";
import styles from "./MainPage.module.css";

export class MainPage extends Component {
  render() {
    return (
      <main className={styles.mainPage}>
        <div className={styles.mainPage__wrapper}>
          <h1>Main page</h1>
        </div>
      </main>
    );
  }
}
