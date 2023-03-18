import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import { CardList } from "./CardList";

const testObj = [
  {
    id: 0,
    name: "string",
    description: "string",
    image: "string",
    belonging: "string",
    cost: 0,
  },
  {
    id: 1,
    name: "string",
    description: "string",
    image: "string",
    belonging: "string",
    cost: 0,
  },
];

describe("testing CardList", () => {
  it("CardList", () => {
    render(<CardList charters={testObj} />);

    const test = screen.getByTestId("custom-element");
    expect(test).toBeInTheDocument();
  });
});
