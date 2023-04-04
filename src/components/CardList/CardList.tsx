import { Card } from "../Card";
import React, { Component } from "react";
import styles from "./CardList.module.css";
import { OneCharterDate } from "pages/MainPage/MainPage";

export interface CarterList {
  charters: OneCharterDate[];
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  setCharterInfo: React.Dispatch<React.SetStateAction<OneCharterDate>>;
}

export class CardList extends Component<CarterList> {
  render() {
    const { charters, setIsActive, setCharterInfo } = this.props;
    return (
      <div className={styles.cardList__container} data-testid="custom-element">
        {charters.map((charter) => {
          return (
            <Card
              key={charter.id}
              {...charter}
              setIsActive={setIsActive}
              setCharterInfo={setCharterInfo}
            />
          );
        })}
      </div>
    );
  }
}
