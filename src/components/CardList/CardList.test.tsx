import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import { CardList } from "./CardList";

const movies = [
  {
    Poster: "string",
    Title: "string",
    Type: "string",
    Year: "string",
    imdbID: "string",
  },
];

describe("Testing CardList page", () => {
  it("Render CardList component", () => {
    render(<CardList movies={movies} />);

    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
