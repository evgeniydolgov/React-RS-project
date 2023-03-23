import React, { Component } from "react";

interface Eblo {
  type: string;
  refCardName: React.RefObject<HTMLInputElement>;
}

export class Test extends Component<Eblo> {
  render() {
    console.log(this.props.type);
    return (
      <div>
        <input type={this.props.type} ref={this.props.refCardName} />
      </div>
    );
  }
}

// ref={(input) => (this.selectVal = input)}
