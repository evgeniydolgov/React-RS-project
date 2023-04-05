import React, { useState } from "react";
import styles from "./FormPage.module.css";
import { CreatedForm } from "../../components/CreatedForm";
import { Card } from "../../components/Card";
import { OneCharterDate } from "pages/MainPage/MainPage";

export const FormPage = () => {
  const [cardsParams, setCardsParams] = useState<OneCharterDate[]>([]);
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
