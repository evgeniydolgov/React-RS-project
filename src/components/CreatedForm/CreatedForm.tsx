/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputElement } from "../InputElement";
import { OneInput } from "../InputElement/InputElement";
import React, { Component } from "react";
import styles from "./CreatedForm.module.css";
import { SelectElement } from "../SelectElement";
import { CheckboxElement } from "../CheckboxElement";
import { CheckboxCost } from "../CheckboxElement/CheckboxElement";
import { RadioElement } from "../RadioElement";
import { ErrorMessage } from "../ErrorMessage";

interface FormCreate {
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
}

export class CreatedForm extends Component<FormCreate> {
  state = {};
  render() {
    const {
      nameError,
      dateError,
      costError,
      imageError,
      FractionError,
      goldenFrameError,
      formRef,
    } = this.props;
    const { cost, frame } = this.props;
    return (
      <form className={styles.form__container} ref={formRef}>
        <div>
          <InputElement {...this.props.name} />
          {nameError ? (
            <ErrorMessage
              message={"enter up to 10 letters starting with capital"}
            />
          ) : (
            <ErrorMessage message={""} />
          )}
        </div>
        <div>
          <InputElement {...this.props.date} />
          {dateError ? (
            <ErrorMessage message={"choice the date of creation"} />
          ) : (
            <ErrorMessage message={""} />
          )}
        </div>
        <div>
          <SelectElement {...this.props.fraction} />
          {FractionError ? (
            <ErrorMessage message={"checked the fraction"} />
          ) : (
            <ErrorMessage message={""} />
          )}
        </div>
        <div>
          <span>Card cost: </span>
          <div>
            {cost.map((el) => (
              <CheckboxElement key={el.title} price={el} />
            ))}
            {costError ? (
              <ErrorMessage message={"checked the card cost"} />
            ) : (
              <ErrorMessage message={""} />
            )}
          </div>
        </div>
        <div>
          <span>Golden frame: </span>
          {frame.map((el, i) => (
            <RadioElement key={new Date().getSeconds() + i} price={el} />
          ))}
          {goldenFrameError ? (
            <ErrorMessage message={"indicate the need for a frame"} />
          ) : (
            <ErrorMessage message={""} />
          )}
        </div>
        <div>
          <InputElement {...this.props.file} />
          {imageError ? (
            <ErrorMessage message={"upload the image"} />
          ) : (
            <ErrorMessage message={""} />
          )}
        </div>
      </form>
    );
  }
}
