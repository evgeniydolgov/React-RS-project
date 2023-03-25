import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import { Page404 } from "./Page404";

describe("Testing page 404", () => {
  it("Render h2, p, image", () => {
    render(<Page404 />);

    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
