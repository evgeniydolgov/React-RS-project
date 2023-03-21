import React, { Component } from "react";
import styles from "./AboutUs.module.css";
import atomImg from "../../assets/png/atom.png";

export class AboutUs extends Component {
  render() {
    return (
      <>
        <div className={styles.about__container}>
          <div className={styles.about}>
            <h2>About us</h2>
            <div className={styles.message__container}>
              <p>
                We are a secret React community, join us. And this is not a
                request!
              </p>
              <div>
                <img src={atomImg} alt="atom img" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
