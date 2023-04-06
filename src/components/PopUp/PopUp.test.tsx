import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import { PopUp } from "./PopUp";

const character = {
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

describe("testing footer", () => {
  it("footer", () => {
    render(
      <PopUp
        isActiv={true}
        setIsActive={() => Boolean}
        charterInfo={character}
      />,
    );

    const name = screen.getByText("Name: Testing Morty");

    expect(name).toBeInTheDocument();
  });
});
