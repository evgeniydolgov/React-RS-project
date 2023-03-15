import React, { Component } from "react";
import styles from "./Header.module.css";
import reactImg from "../../assets/svg/react.svg";
import { NavLink } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <>
        <header className={styles.container}>
          <div className={styles.header}>
            <ul className={styles.header__list}>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? styles.active : undefined
                  }
                >
                  Main Page
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? styles.active : undefined
                  }
                >
                  About Us
                </NavLink>
              </li>
            </ul>
            <div className={styles.logo}>
              <img src={reactImg} alt="react image" />
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
