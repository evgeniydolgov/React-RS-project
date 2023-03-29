import { InputElement } from "../InputElement";
import { OneInput } from "../InputElement/InputElement";
import React, { Component } from "react";
import styles from "./CreatedForm.module.css";
import { SelectElement } from "../SelectElement";
import { CheckboxElement } from "../CheckboxElement";
import { CheckboxCost } from "../CheckboxElement/CheckboxElement";
import { RadioElement } from "../RadioElement";
import { ErrorMessage } from "../ErrorMessage";

export interface FormCreate {
  name: OneInput;
  date: OneInput;
  file: OneInput;
  fraction: OneInput;
  cost: CheckboxCost[];
  frame: CheckboxCost[];
  nameError: boolean;
  dateError: boolean;
  costError: boolean;
  imageError: boolean;
  FractionError: boolean;
  goldenFrameError: boolean;
  formRef: React.RefObject<HTMLFormElement>;
  success: boolean;
}

export class CreatedForm extends Component<FormCreate> {
  render() {
    const {
      nameError,
      dateError,
      costError,
      imageError,
      FractionError,
      goldenFrameError,
      formRef,
      success,
    } = this.props;
    const { cost, frame } = this.props;
    return (
      <form className={styles.form__container} ref={formRef}>
        <div>
          <InputElement {...this.props.name} />
          {nameError && <ErrorMessage message={"first upper letter,less 10"} />}
        </div>
        <div>
          <InputElement {...this.props.date} />
          {dateError && <ErrorMessage message={"choice date of creation"} />}
        </div>
        <div>
          <SelectElement {...this.props.fraction} />
          {FractionError && <ErrorMessage message={"checked the fraction"} />}
        </div>
        <div>
          <span>Card cost: </span>
          <div className={styles.choicePrice}>
            {cost.map((el) => (
              <CheckboxElement key={el.title} price={el} />
            ))}
            {costError && <ErrorMessage message={"checked the card cost"} />}
          </div>
        </div>
        <div className={styles.frameChoice}>
          <span>Golden frame: </span>
          {frame.map((el, i) => (
            <RadioElement key={new Date().getSeconds() + i} price={el} />
          ))}
          {goldenFrameError && (
            <ErrorMessage message={"indicate the need for a frame"} />
          )}
        </div>
        <div>
          <InputElement {...this.props.file} />
          {imageError && <ErrorMessage message={"upload the image"} />}
          <div></div>
          {success && <div className={styles.success}>card created!</div>}
        </div>
      </form>
    );
  }
}
