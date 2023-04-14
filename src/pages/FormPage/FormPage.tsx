import React from "react";
import styles from "./FormPage.module.css";
import { CreatedForm } from "../../components/CreatedForm";
import { Card } from "../../components/Card";
import { useAppSelector } from "../../hook";

export const FormPage = () => {
  const cardsParams = useAppSelector((state) => state.newCardList.list);
  return (
    <div className={styles.formPage} data-testid="form_page">
      <CreatedForm />
      <div className={styles.newCard__container}>
        {cardsParams.map((el, i) => {
          return <Card key={i} {...el} />;
        })}
      </div>
    </div>
  );
};
