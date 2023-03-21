import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import { Card } from "./Card";

const testObj = {
  id: 0,
  name: "string",
  description: "string",
  image: "https://gwent.one/image/gwent/assets/card/art/low/1009.jpg",
  belonging: "string",
  cost: 0,
};

describe("testing Card", () => {
  it("Card have testing id", () => {
    render(<Card {...testObj} />);

    expect(screen.getByTestId("card-container")).toBeInTheDocument();
  });
  it("Card render image", () => {
    render(<Card {...testObj} />);

    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", testObj.image);
    expect(screen.getByRole("img")).toHaveAttribute("alt", "movie picter");
  });
});
