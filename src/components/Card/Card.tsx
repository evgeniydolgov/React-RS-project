import React, { Component } from "react";
import { OneCgarterDate } from "pages/MainPage/MainPage";
import styles from "./Card.module.css";

export class Card extends Component<OneCgarterDate> {
  render() {
    const { image, name, species, created, upload, frame } = this.props;
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
              {species[0].toUpperCase() + species.slice(1)}
            </p>
            <p>
              <span style={{ fontSize: "12px" }}>Cost: </span>
              {created.slice(21, 23)[0] === "0"
                ? created.slice(22, 23)
                : created.slice(21, 23)}
              $
            </p>
          </div>
          <div>
            {this.props.date ? (
              <div>
                Date of creation: <p>{this.props.date}</p>
              </div>
            ) : (
              <div>
                Date of creation: <p>{created.slice(0, 10)}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
