/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import styles from "./FormPage.module.css";
import { CreatedForm } from "../../components/CreatedForm";
import { Card } from "../../components/Card";

export const FormPage = () => {
  const [cardsParams, setCardsParams] = useState<any[]>([]);
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
