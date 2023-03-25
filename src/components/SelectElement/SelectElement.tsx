import React, { Component } from "react";
import { OneInput } from "../InputElement/InputElement";

export class SelectElement extends Component<OneInput> {
  render() {
    const { title, refSelect } = this.props;
    return (
      <>
        <label>
          <span>{title}</span>
          <select ref={refSelect} defaultValue={""}>
            <option value="" disabled></option>
            <option value="Neutral">Neutral</option>
            <option value="Northerners">Northerners</option>
            <option value="Scoiatael">Scoiatael</option>
            <option value="Skellige">Skellige</option>
          </select>
        </label>
      </>
    );
  }
}
