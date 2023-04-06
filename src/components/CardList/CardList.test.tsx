import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import { CardList } from "./CardList";

const testObj = [
  {
    id: 1,
    name: "Testing Rick",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    url: "https://rickandmortyapi.com/api/character/1",
    created: "2017-11-04T18:48:46.250Z",
  },
  {
    id: 2,
    name: "Testing Morty",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    url: "https://rickandmortyapi.com/api/character/1",
    created: "2017-11-04T18:48:46.250Z",
  },
];

describe("testing CardList", () => {
  it("CardList", () => {
    render(<CardList charters={testObj} />);

    const test = screen.getByTestId("custom-element");
    expect(test).toBeInTheDocument();
  });
});
