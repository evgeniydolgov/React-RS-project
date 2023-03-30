import { Card } from "../Card";
import React, { Component } from "react";
import styles from "./CardList.module.css";

export interface CarterCard {
  name: string;
  belonging: string;
  cost: number;
  id?: number;
  description?: string;
  date?: string;
  image?: string;
  upload?: Blob | MediaSource | undefined;
  frame?: boolean;
}

export interface CarterList {
  charters: CarterCard[];
}

export class CardList extends Component<CarterList> {
  render() {
    const { charters } = this.props;
    return (
      <div className={styles.cardList__container} data-testid="custom-element">
        {charters.map((charter) => {
          return <Card key={charter.id} {...charter} />;
        })}
      </div>
    );
  }
}
