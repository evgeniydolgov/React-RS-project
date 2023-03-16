import React, { Component } from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

export class Layout extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Header />
        <Outlet />
        <Footer />
      </div>
    );
  }
}
