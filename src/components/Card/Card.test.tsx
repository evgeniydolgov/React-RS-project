import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import { Card } from "./Card";

const testObj = {
  id: 2,
  name: "Testing Morty",
  status: "Alive",
  species: "Human",
  type: "",
  gender: "Male",
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  url: "https://rickandmortyapi.com/api/character/1",
  created: "2017-11-04T18:48:46.250Z",
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
