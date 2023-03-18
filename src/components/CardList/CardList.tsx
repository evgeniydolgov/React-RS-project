import { Card } from "../Card";
import React, { Component } from "react";
import styles from "./CardList.module.css";

export interface CarterCard {
  id: number;
  name: string;
  description: string;
  image: string;
  belonging: string;
  cost: number;
}

export interface CarterList {
  charters: CarterCard[];
}

export class CardList extends Component<CarterList> {
  render() {
    const { charters } = this.props;
    console.log(charters);
    return (
      <div className={styles.cardList__container} data-testid="custom-element">
        {charters.map((charter) => {
          return <Card key={charter.id} {...charter} />;
        })}
      </div>
    );
  }
}
