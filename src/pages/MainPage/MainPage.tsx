import React, { useState, useEffect } from "react";
import styles from "./MainPage.module.css";
import { CardList } from "../../components/CardList";
import { PopUp } from "../../components/PopUp";
import { Loading } from "../../components/Loading";
import { useAppSelector, useAppDispatch } from "../../hook";
import { setInputText } from "../../store/searchSlice";
import { useGetCardQuery } from "../../store/cardApi";

export interface OneCharterDate {
  id?: number;
  name: string;
  species: string;
  status?: string;
  type?: string;
  gender?: string;
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

  const { data, isLoading, error } = useGetCardQuery(searchValue);

  const stopSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSearchValue(inputValue);
  };

  useEffect(() => {
    setSearchValue(inputValue);
    if (data) {
      setChartersData(data.results);
      setErrorRequest(false);
    }
    error && setErrorRequest(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, error]);

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
        {!isLoading ? (
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
