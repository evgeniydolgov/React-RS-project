import React, { Component } from "react";
import styles from "./FormPage.module.css";
import { CreatedForm } from "../CreatedForm";

export class FormPage extends Component {
  state = {
    name: {
      title: "Card name: ",
      type: "text",
      refInput: React.createRef<HTMLInputElement>(),
    },
    date: {
      title: "Creation date: ",
      type: "date",
      refInput: React.createRef<HTMLInputElement>(),
    },
    file: {
      title: "Image: ",
      type: "file",
      refInput: React.createRef<HTMLInputElement>(),
    },
    fraction: {
      title: "Fraction: ",
      refSelect: React.createRef<HTMLSelectElement>(),
    },
    cost: {
      refSelect: React.createRef<HTMLInputElement>(),
    },
  };
  callThis = () => {
    // console.log((this.state.refCardName.current as HTMLInputElement).value);
    console.log(this.state.name.refInput.current?.value);
    console.log(this.state.date.refInput.current?.value);
    console.log(this.state.file.refInput.current?.files);
    console.log(this.state.fraction.refSelect.current?.value);
  };
  render() {
    return (
      <div className={styles.formPage}>
        <CreatedForm {...this.state} />
        {/* <Test {...this.state} /> */}
        <div>
          <input type="button" value="click" onClick={this.callThis} />
        </div>
      </div>
    );
  }
}
