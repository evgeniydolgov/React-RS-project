import React, { Component } from "react";
import { Footer } from "../Footer";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import { HeaderWithRouter } from "../Header";

export class Layout extends Component {
  render() {
    return (
      <div className={styles.container}>
        <HeaderWithRouter />
        <Outlet />
        <Footer />
      </div>
    );
  }
}
