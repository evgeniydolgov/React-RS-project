import React, { Component } from "react";
import styles from "./Page404.module.css";
import questionImg from "../../assets/png/icons-question.png";

export class Page404 extends Component {
  render() {
    return (
      <>
        <div className={styles.NonPage__container}>
          <div className={styles.NonPage}>
            <h2>404</h2>
            <p>page not found</p>
            <img src={questionImg} alt="question image" />
          </div>
        </div>
      </>
    );
  }
}
