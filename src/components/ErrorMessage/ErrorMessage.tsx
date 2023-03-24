import React, { Component } from "react";

interface ErrorText {
  message: string;
}

export class ErrorMessage extends Component<ErrorText> {
  render() {
    const { message } = this.props;
    return (
      <div
        style={
          message
            ? { color: "red", height: "14px", fontSize: "12px" }
            : { height: "14px", fontSize: "0px" }
        }
      >
        {"Error! Please " + message}
      </div>
    );
  }
}
