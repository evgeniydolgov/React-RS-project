import React, { Component } from "react";
import styles from "./Header.module.css";
import reactImg from "../../assets/svg/react.svg";
import { NavLink } from "react-router-dom";
import { withRouter, WithRouterProps } from "../../utils/withRouter";

class Header extends Component<WithRouterProps> {
  render() {
    const { pathname } = this.props.location;
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
              <li>
                <NavLink
                  to="/form"
                  className={({ isActive }) =>
                    isActive ? styles.active : undefined
                  }
                >
                  Created Card
                </NavLink>
              </li>
            </ul>
            <div className={styles.pageTitle}>
              {pathname === "/" ? (
                <div>Main Page</div>
              ) : pathname === "/about" ? (
                <div>About Page</div>
              ) : pathname === "/form" ? (
                <div>Form Page</div>
              ) : (
                <div>Page not found</div>
              )}
            </div>
            <div className={styles.logo}>
              <img src={reactImg} alt="react image" />
            </div>
          </div>
        </header>
      </>
    );
  }
}

export const HeaderWithRouter = withRouter(Header);
