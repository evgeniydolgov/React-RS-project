import React, { Component } from "react";

export interface CheckboxCost {
  title: string;
  refInput: React.RefObject<HTMLInputElement>;
}

export interface CardChange {
  price: CheckboxCost;
}

export class CheckboxElement extends Component<CardChange> {
  render() {
    const { title, refInput } = this.props.price;
    return (
      <>
        <label>
          <input type="checkbox" name="cost" ref={refInput} value={title} />
          <span>{title}$</span>
        </label>
      </>
    );
  }
}
