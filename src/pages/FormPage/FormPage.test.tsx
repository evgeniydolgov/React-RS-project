import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import { FormPage } from "./FormPage";
import { Provider } from "react-redux";
import store from "../../store";

describe("testing FormPage", () => {
  it("should be render button message", async () => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>,
    );

    const component = screen.getByRole("button");
    expect(component).toBeInTheDocument();
  });
  it("should be form page id", () => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>,
    );

    expect(screen.getByTestId("form_page")).toBeInTheDocument();
  });
  it("should be render text", () => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>,
    );

    expect(screen.getByText("SEND")).toBeInTheDocument();
  });
});
