import React, { Component } from "react";

export interface OneInput {
  title?: string;
  type?: string;
  refInput?: React.RefObject<HTMLInputElement>;
  refSelect?: React.RefObject<HTMLSelectElement>;
}

export class InputElement extends Component<OneInput> {
  render() {
    const { title, type, refInput } = this.props;
    return (
      <>
        <label>
          {title}
          <input type={type} ref={refInput} />
        </label>
      </>
    );
  }
}
