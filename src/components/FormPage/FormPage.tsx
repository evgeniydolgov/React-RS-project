import React, { useState } from "react";
import styles from "./FormPage.module.css";
import { CreatedForm } from "../CreatedForm";
import { Card } from "../Card";
import { CarterCard } from "../CardList/CardList";

export const FormPage = () => {
  const [cardsParams, setCardsParams] = useState<CarterCard[]>([]);
  return (
    <div className={styles.formPage} data-testid="form_page">
      <CreatedForm setCardsParams={setCardsParams} cardsParams={cardsParams} />
      <div className={styles.newCard__container}>
        {cardsParams.map((el, i) => {
          return <Card key={i} {...el} />;
        })}
      </div>
    </div>
  );
};
