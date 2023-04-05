import React from "react";
import styles from "./Loading.module.css";

export const Loading = () => (
  <div className={styles.loading_text}>
    <div className={styles.loader} />
    <p>Please wait a minute</p>
  </div>
);
