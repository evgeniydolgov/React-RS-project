import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import { FormPage } from "./FormPage";

describe("testing FormPage", () => {
  it("should be render button message", () => {
    render(<FormPage />);

    const component = screen.getByRole("button");
    expect(component).toBeInTheDocument();
  });
  it("should be form page id", () => {
    render(<FormPage />);

    expect(screen.getByTestId("form_page")).toBeInTheDocument();
  });
  it("should be render text", () => {
    render(<FormPage />);

    expect(screen.getByText("SEND")).toBeInTheDocument();
  });
});
