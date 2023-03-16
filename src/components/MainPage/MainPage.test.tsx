import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import { MainPage } from "./MainPage";

describe("testing main page", () => {
  it("main page", () => {
    render(<MainPage />);

    expect(
      screen.getByRole("heading", {
        level: 2,
      }),
    ).toHaveTextContent("Main page");
  });
  it("render without placeholder", () => {
    render(<MainPage />);

    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  });
});
