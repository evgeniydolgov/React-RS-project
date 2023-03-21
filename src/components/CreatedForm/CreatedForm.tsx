/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import React, { Component } from "react";
import styles from "./CreatedForm.module.css";

interface Props {
  props: string;
}

export class CreatedForm extends Component {
  selectVal: any;
  constructor(props: Props) {
    super(props);
    this.state = { selectValue: "" };
  }
  callThis = () => {
    console.log(this.selectVal.value);
  };
  render() {
    return (
      <form className={styles.form__container}>
        <label>
          <span>Card name:</span>
          <input type="text" />
        </label>
        <label>
          <span>Creation date:</span>
          <input type="date" />
        </label>
        <label>
          <span>Fraction:</span>
          <select ref={(input) => (this.selectVal = input)}>
            <option defaultValue="Neutral">Neutral</option>
            <option value="Northerners">Northerners</option>
            <option value="Scoiatael">Scoiatael</option>
            <option value="Skellige">Skellige</option>
          </select>
        </label>
        <div>
          <input type="button" value="click" onClick={this.callThis} />
        </div>
        <span>Card cost:</span>
        <div>
          <label>
            <input type="checkbox" name="cost" />
            1$
          </label>
          <label>
            <input type="checkbox" name="cost" />
            5$
          </label>
          <label>
            <input type="checkbox" name="cost" />
            10$
          </label>
        </div>
        <div>
          Golden frame:
          <label>
            <input type="radio" name="Golden frame" id="Golden frame" />
            Yes
          </label>
          <label>
            <input type="radio" name="Golden frame" id="Golden frame" />
            No
          </label>
        </div>
        <label>
          <input type="file" />
        </label>
      </form>
    );
  }
}
