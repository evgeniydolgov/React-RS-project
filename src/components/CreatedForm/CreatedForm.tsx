import { InputElement } from "../InputElement";
import { OneInput } from "../InputElement/InputElement";
import React, { Component } from "react";
import styles from "./CreatedForm.module.css";
import { SelectElement } from "../SelectElement";

interface FormCreate {
  name: OneInput;
  date: OneInput;
  file: OneInput;
  fraction: OneInput;
}

export class CreatedForm extends Component<FormCreate> {
  render() {
    return (
      <form className={styles.form__container}>
        <InputElement {...this.props.name} />
        <InputElement {...this.props.date} />
        <SelectElement {...this.props.fraction} />
        <span>Card cost:</span>
        <div>
          <label>
            <input type="checkbox" name="cost" />
            <span> 1$</span>
          </label>
          <label>
            <input type="checkbox" name="cost" />
            <span> 5$</span>
          </label>
          <label>
            <input type="checkbox" name="cost" />
            <span> 10$</span>
          </label>
        </div>
        <div>
          Golden frame:
          <label>
            <input type="radio" name="Golden frame" id="Golden frame" />
            Yes
          </label>
          <label>
            <input type="radio" name="Golden frame" id="Golden frame" />
            No
          </label>
        </div>
        <InputElement {...this.props.file} />
      </form>
    );
  }
}
