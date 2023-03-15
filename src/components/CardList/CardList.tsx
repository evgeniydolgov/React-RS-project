import { Card } from "../Card";
import React, { Component } from "react";
import styles from "./CardList.module.css";

export interface MyMovieCard {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export interface MyProps {
  movies: MyMovieCard[];
}

export class CardList extends Component<MyProps, MyMovieCard> {
  render() {
    const { movies } = this.props;
    return (
      <div className={styles.cardList__container}>
        {movies.map((movie, i) => {
          return <Card key={i} {...movie} />;
        })}
      </div>
    );
  }
}
