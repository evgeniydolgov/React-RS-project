import React, { useState, useEffect, useRef } from "react";
import styles from "./MainPage.module.css";
import { CardList } from "../../components/CardList";
import { PopUp } from "../../components/PopUp";

export interface OneCharterDate {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
  upload?: Blob | MediaSource | undefined;
  frame?: boolean;
  date?: string;
  setIsActive?: React.Dispatch<React.SetStateAction<boolean>>;
  setCharterInfo?: React.Dispatch<React.SetStateAction<OneCharterDate>>;
}

export const MainPage = () => {
  function setDefaultValue() {
    const userInput = localStorage.getItem("inputValue");
    return userInput ? userInput : "";
  }
  function setDefaultSearchParam() {
    const userInput = localStorage.getItem("inputValue");
    return userInput ? `name=${userInput}` : "page=1";
  }
  const [inputValue, setinputValue] = useState(setDefaultValue());
  const [chartersData, setChartersData] = useState([] as OneCharterDate[]);
  const [searchValue, setSearchValue] = useState(setDefaultSearchParam());
  const [errorRequest, setErrorRequest] = useState(false);
  const [isActiv, setIsActive] = useState(false);
  const [charterInfo, setCharterInfo] = useState({} as OneCharterDate);

  const inputValueRef = useRef<string>();

  const stopSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSearchValue(`name=${inputValue}`);
    localStorage.setItem("inputValue", inputValueRef.current as string);
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setinputValue(event.currentTarget.value);
  };

  useEffect(() => {
    inputValueRef.current = inputValue;
  }, [inputValue]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?${searchValue}`)
      .then((response) => response.json())
      .then((data) => {
        setChartersData([...data.results]);
        setErrorRequest(false);
      })
      .catch(() => setErrorRequest(true));
  }, [searchValue]);

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
          {errorRequest && (
            <div className={styles.incorrectValue}>
              Nothing found, please select another value
            </div>
          )}
        </form>
        {chartersData.length !== 0 ? (
          <CardList
            charters={chartersData}
            setIsActive={setIsActive}
            setCharterInfo={setCharterInfo}
          />
        ) : (
          <div> loading</div>
        )}
      </div>
      {charterInfo && (
        <PopUp
          setIsActive={setIsActive}
          isActiv={isActiv}
          charterInfo={charterInfo}
        />
      )}
    </main>
  );
};
