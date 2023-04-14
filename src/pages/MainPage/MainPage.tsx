import React, { useState, useEffect, useRef } from "react";
import styles from "./MainPage.module.css";
import { CardList } from "../../components/CardList";
import { PopUp } from "../../components/PopUp";
import { Loading } from "../../components/Loading";
import { useAppSelector, useAppDispatch } from "../../hook";
import { setInputText } from "../../store/searchSlice";

export interface OneCharterDate {
  id?: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  location?: {
    name: string;
  };
  image?: string;
  created?: string;
  upload?: Blob | MediaSource | undefined;
  frame?: boolean;
  cost?: string;
  date?: string;
  setIsActive?: React.Dispatch<React.SetStateAction<boolean>>;
  setCharterInfo?: React.Dispatch<React.SetStateAction<OneCharterDate>>;
}

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const inputValue = useAppSelector((state) => state.searchValue.searchValue);

  const [chartersData, setChartersData] = useState([] as OneCharterDate[]);
  const [searchValue, setSearchValue] = useState("");
  const [errorRequest, setErrorRequest] = useState(false);
  const [isActiv, setIsActive] = useState(false);
  const [charterInfo, setCharterInfo] = useState({} as OneCharterDate);

  const stopSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSearchValue(inputValue);
  };

  useEffect(() => {
    setSearchValue(inputValue);
  }, []);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${searchValue}`)
      .then((response) => response.json())
      .then((data) => {
        setChartersData([...data.results]);
        setErrorRequest(false);
      })
      .catch(() => {
        setErrorRequest(true);
      });
  }, [searchValue]);

  return (
    <main className={styles.mainPage}>
      <div className={styles.mainPage__wrapper}>
        <h2>Main page</h2>
        <form className={styles.mainPage__form}>
          <input
            className={styles.mainPage__input}
            type="text"
            placeholder="Search..."
            onChange={(event) =>
              dispatch(setInputText(event.currentTarget.value))
            }
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
          <>
            {" "}
            <CardList
              charters={chartersData}
              setIsActive={setIsActive}
              setCharterInfo={setCharterInfo}
            />
            {charterInfo && (
              <PopUp
                setIsActive={setIsActive}
                isActiv={isActiv}
                charterInfo={charterInfo}
              />
            )}
          </>
        ) : (
          <Loading />
        )}
      </div>
    </main>
  );
};
