import React, { Component } from "react";
import styles from "./MainPage.module.css";
import { CardList } from "../CardList";

export class MainPage extends Component {
  state = {
    inputValue: "",
    movies: [],
  };

  stopSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({ inputValue: event.currentTarget.value });
  };

  componentDidMount(): void {
    fetch("http://www.omdbapi.com/?apikey=4d844669&s=Batman")
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
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
          {this.state.movies.length ? (
            <CardList movies={this.state.movies} />
          ) : (
            <h3>Loading...</h3>
          )}
        </div>
      </main>
    );
  }
}
