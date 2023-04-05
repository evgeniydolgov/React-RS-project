import React, { Component } from "react";
import { OneCharterDate } from "pages/MainPage/MainPage";
import styles from "./Card.module.css";

export class Card extends Component<OneCharterDate> {
  render() {
    const {
      image,
      name,
      species,
      created,
      upload,
      frame,
      setIsActive,
      setCharterInfo,
    } = this.props;
    const imgSrc = upload ? URL.createObjectURL(upload) : image;

    const openCharterCard = () => {
      setIsActive && setIsActive(true);
      setCharterInfo && setCharterInfo(this.props);
    };
    return (
      <div
        className={styles.card__container}
        data-testid="card-container"
        onClick={openCharterCard}
      >
        <div className={styles.card__img}>
          <div
            className={frame || frame === undefined ? styles.golder__board : ""}
          ></div>
          <img src={imgSrc} alt="movie picter" />
        </div>
        <div className={styles.card__text}>
          <div>
            <h3>
              <span style={{ fontSize: "12px" }}>Name: </span>
              {name}
            </h3>
            <p>
              <span style={{ fontSize: "12px" }}>Fraction: </span>
              {species[0].toUpperCase() + species.slice(1)}
            </p>
            <p>
              <span style={{ fontSize: "12px" }}>Cost: </span>
              {this.props.cost ? (
                <span>{this.props.cost}$</span>
              ) : (
                <span>{created && created.slice(21, 23)}$</span>
              )}
            </p>
          </div>
          <div>
            {this.props.date ? (
              <div>
                Date of creation: <p>{this.props.date}</p>
              </div>
            ) : (
              <div>
                Date of creation: <p>{created && created.slice(0, 10)}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
