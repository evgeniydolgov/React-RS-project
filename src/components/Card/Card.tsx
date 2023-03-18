import React, { Component } from "react";
import { CarterCard } from "components/CardList/CardList";
import styles from "./Card.module.css";

export class Card extends Component<CarterCard> {
  render() {
    const { image, name, description, belonging, cost } = this.props;
    return (
      <div className={styles.card__container} data-testid="card-container">
        <div className={styles.card__img}>
          <div className={styles.golder__board}></div>
          <img src={image} alt="movie picter" />
        </div>
        <div className={styles.card__text}>
          <div>
            <h3>
              <span style={{ fontSize: "12px" }}>Card name: </span>
              {name}
            </h3>
            <p>
              {" "}
              <span style={{ fontSize: "12px" }}>Fraction: </span>
              {belonging[0].toUpperCase() + belonging.slice(1)}
            </p>
            <p>
              <span style={{ fontSize: "12px" }}>Cost: </span>
              {cost}$
            </p>
          </div>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}
