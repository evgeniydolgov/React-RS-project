import React from "react";
import styles from "./PopUp.module.css";
import close from "../../assets/png/close.png";
import { OneCharterDate } from "pages/MainPage/MainPage";

interface PopUpValue {
  isActiv: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  charterInfo: OneCharterDate;
}
export const PopUp = ({ isActiv, setIsActive, charterInfo }: PopUpValue) => {
  const active = isActiv ? styles.active : "";
  const { name, status, species, type, gender, location, created, image } =
    charterInfo;
  return (
    <>
      <div
        className={styles.popUp_container + " " + active}
        onClick={() => setIsActive(false)}
      >
        <div
          className={styles.charter_card}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.charter_img}>
            <img src={image} alt="charter image" />
          </div>
          <div className={styles.charter_info}>
            <p>Name: {name || "unknow"}</p>
            <p>Status: {status || "unknow"}</p>
            <p>Species: {species || "unknow"}</p>
            <p>Type: {type || "No data"}</p>
            <p>Gender: {gender || "unknow"}</p>
            <p>Location: {location && location.name}</p>
            <p>Card cost: {created && created.slice(21, 23)}$</p>
            <p>Created: {created && created.slice(0, 10)}</p>
          </div>
          <button
            type="button"
            className={styles.charter_close}
            onClick={() => setIsActive(false)}
          >
            <img src={close} alt="close button" />
          </button>
        </div>
      </div>
    </>
  );
};
