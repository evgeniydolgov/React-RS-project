import { CreatedForm } from "../CreatedForm";
import React, { Component } from "react";
import styles from "./FormPage.module.css";

export class FormPage extends Component {
  render() {
    return (
      <div className={styles.formPage}>
        <CreatedForm />
      </div>
    );
  }
}
