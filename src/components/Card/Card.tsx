import React, { Component } from "react";
import { CarterCard } from "components/CardList/CardList";
import styles from "./Card.module.css";

export class Card extends Component<CarterCard> {
  render() {
    const { image, name, description, belonging, cost, upload, frame } =
      this.props;
    const imgSrc = upload ? URL.createObjectURL(upload) : image;

    return (
      <div className={styles.card__container} data-testid="card-container">
        <div className={styles.card__img}>
          <div
            className={frame || frame === undefined ? styles.golder__board : ""}
          ></div>
          <img src={imgSrc} alt="movie picter" />
        </div>
        <div className={styles.card__text}>
          <div>
            <h3>
              <span style={{ fontSize: "12px" }}>Card name: </span>
              {name}
            </h3>
            <p>
              <span style={{ fontSize: "12px" }}>Fraction: </span>
              {belonging[0].toUpperCase() + belonging.slice(1)}
            </p>
            <p>
              <span style={{ fontSize: "12px" }}>Cost: </span>
              {cost}$
            </p>
          </div>
          <div>
            {this.props.date ? (
              <div>
                Date of creation: <p>{this.props.date}</p>
              </div>
            ) : (
              description
            )}
          </div>
        </div>
      </div>
    );
  }
}
