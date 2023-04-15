import React from "react";
import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import { MainPage } from "./MainPage";
import { Provider } from "react-redux";
import store from "../../store";

describe("Testing Rick", () => {
  it(`should be possible to remove items from the cart`, async () => {
    const { findByText } = render(
      <Provider store={store}>
        <MainPage />
      </Provider>,
    );
    expect(await findByText("Testing Rick")).toBeInTheDocument();
    expect(await findByText("Testing Morty")).toBeInTheDocument();
  });
});
