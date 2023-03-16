import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import { AboutUs } from "./AboutUs";

describe("testing About Us page", () => {
  it("Renders about us", () => {
    render(<AboutUs />);

    expect(
      screen.getByRole("heading", {
        level: 2,
      }),
    ).toHaveTextContent("About us");
  });
});
