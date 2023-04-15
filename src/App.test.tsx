import React from "react";
import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import { App } from "./App";
import { Provider } from "react-redux";
import store from "./store";

describe("Testing Rick", () => {
  it(`should be possible to remove items from the cart`, () => {
    const component = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(component.getByText("Main page")).toBeInTheDocument();
  });
});
