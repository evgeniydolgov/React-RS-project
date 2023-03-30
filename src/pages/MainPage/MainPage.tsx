import React, { useState, useEffect, useRef } from "react";
import styles from "./MainPage.module.css";
import { CardList } from "../../components/CardList";
import { chartersData } from "../../data/data";

export const MainPage = () => {
  function setDefaultValue() {
    const userInput = localStorage.getItem("inputValue");
    return userInput ? userInput : "";
  }
  const [inputValue, setinputValue] = useState(setDefaultValue());

  const inputValueRef = useRef<string>();

  const stopSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setinputValue(event.currentTarget.value);
  };

  useEffect(() => {
    inputValueRef.current = inputValue;
  }, [inputValue]);

  useEffect(() => {
    return () => {
      localStorage.setItem("inputValue", inputValueRef.current as string);
    };
  }, []);

  return (
    <main className={styles.mainPage}>
      <div className={styles.mainPage__wrapper}>
        <h2>Main page</h2>
        <form className={styles.mainPage__form}>
          <input
            className={styles.mainPage__input}
            type="text"
            placeholder="Search..."
            onChange={handleChange}
            value={inputValue}
          />
          <button
            className={styles.mainPage__button}
            onClick={stopSubmit}
            type="submit"
          ></button>
        </form>
        <CardList charters={chartersData} />
      </div>
    </main>
  );
};
