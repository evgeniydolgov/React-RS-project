import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import { FormPage } from "../../pages/FormPage";
import { Provider } from "react-redux";
import store from "../../store";

describe("testing CreatedForm", () => {
  it("should be render textbox in CreatedForm", () => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>,
    );
    const component = screen.getByRole("textbox");
    expect(component).toBeInTheDocument();
  });

  it("should be render test id in CreatedForm", () => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>,
    );
    const component = screen.getByTestId("test");
    expect(component).toBeInTheDocument();
  });
});
