import React, { Component } from "react";
import { CardChange } from "../CheckboxElement/CheckboxElement";

export class RadioElement extends Component<CardChange> {
  render() {
    const { title, refInput } = this.props.price;
    return (
      <>
        <label>
          <input
            type="radio"
            name="Golden frame"
            value={title}
            ref={refInput}
          />
          <span>{title}</span>
        </label>
      </>
    );
  }
}
