import React, { Component } from "react";
import styles from "./ErrorMessage.module.css";

interface ErrorText {
  message: string;
}

export class ErrorMessage extends Component<ErrorText> {
  render() {
    const { message } = this.props;
    return <p className={styles.error_mes}>{"Error! Please " + message}</p>;
  }
}
