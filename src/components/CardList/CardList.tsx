import { Card } from "../Card";
import React, { Component } from "react";
import styles from "./CardList.module.css";
import { OneCgarterDate } from "pages/MainPage/MainPage";

export interface CarterList {
  charters: OneCgarterDate[];
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
