import React from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { Layout } from "./components/Layout";
import { AboutUs } from "./pages/AboutUs";
import { Page404 } from "./pages/Page404";
import { FormPage } from "./pages/FormPage";

export class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="form" element={<FormPage />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
