import React, { Component } from "react";
import styles from "./MainPage.module.css";
import { CardList } from "../CardList";
import { chartersData } from "../../data/data";

export class MainPage extends Component {
  state = {
    inputValue: "",
  };

  stopSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({ inputValue: event.currentTarget.value });
  };

  componentDidMount(): void {
    localStorage.getItem("inputValue")
      ? this.setState({ inputValue: localStorage.getItem("inputValue") })
      : " ";
  }

  componentWillUnmount(): void {
    localStorage.setItem("inputValue", this.state.inputValue);
  }
  render() {
    const { inputValue } = this.state;
    return (
      <main className={styles.mainPage}>
        <div className={styles.mainPage__wrapper}>
          <h2>Main page</h2>
          <form className={styles.mainPage__form}>
            <input
              className={styles.mainPage__input}
              type="text"
              placeholder="Search..."
              value={inputValue}
              onChange={this.handleChange}
            />
            <button
              className={styles.mainPage__button}
              onClick={this.stopSubmit}
              type="submit"
            ></button>
          </form>
          <CardList charters={chartersData} />
        </div>
      </main>
    );
  }
}
