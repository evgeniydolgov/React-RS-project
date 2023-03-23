import React, { Component } from "react";

export class CheckboxElement extends Component {
  render() {
    return (
      <>
        <label>
          <input type="checkbox" name="cost" />
          <span> 1$</span>
        </label>
      </>
    );
  }
}
