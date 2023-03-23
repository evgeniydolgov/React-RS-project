/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputElement } from "../InputElement";
import { OneInput } from "../InputElement/InputElement";
import React, { Component } from "react";
import styles from "./CreatedForm.module.css";
import { SelectElement } from "../SelectElement";
import { CheckboxElement } from "../CheckboxElement";
import { CheckboxCost } from "../CheckboxElement/CheckboxElement";
import { RadioElement } from "../RadioElement";

interface FormCreate {
  name: OneInput;
  date: OneInput;
  file: OneInput;
  fraction: OneInput;
  cost: CheckboxCost[];
  frame: CheckboxCost[];
}

export class CreatedForm extends Component<FormCreate> {
  render() {
    const { cost, frame } = this.props;
    return (
      <form className={styles.form__container}>
        <InputElement {...this.props.name} />
        <InputElement {...this.props.date} />
        <SelectElement {...this.props.fraction} />
        <span>Card cost:</span>
        <div>
          {cost.map((el) => (
            <CheckboxElement key={el.title} price={el} />
          ))}
        </div>
        <div>
          Golden frame:
          {frame.map((el, i) => (
            <RadioElement key={new Date().getSeconds() + i} price={el} />
          ))}
        </div>
        <InputElement {...this.props.file} />
      </form>
    );
  }
}
