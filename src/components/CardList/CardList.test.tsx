import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import { CardList } from "./CardList";

const charter = [
  {
    id: 2,
    name: "string",
    description: "string",
    image: "string",
    belonging: "string",
    cost: 1,
  },
  {
    id: 2,
    name: "string",
    description: "string",
    image: "string",
    belonging: "string",
    cost: 1,
  },
];

describe("Testing CardList page", () => {
  it("Render CardList component", () => {
    render(<CardList charters={charter} />);

    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
