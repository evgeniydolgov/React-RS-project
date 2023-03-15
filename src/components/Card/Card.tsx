import React, { Component } from "react";
import { MyMovieCard } from "components/CardList/CardList";
import styles from "./Card.module.css";

export class Card extends Component<MyMovieCard> {
  render() {
    const { Title: title, Year: year, Type: type, Poster: poster } = this.props;
    return (
      <div className={styles.card__container}>
        <div className={styles.card__img}>
          <img src={poster} alt="movie picter" />
        </div>
        <div className={styles.card__text}>
          <h3>{title}</h3>
          <p>year: {year}</p>
          <p>type: {type}</p>
        </div>
      </div>
    );
  }
}
