import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import { Footer } from "./Footer";

describe("testing footer", () => {
  it("footer", () => {
    render(<Footer />);

    const ul = screen.getByRole("list");

    expect(ul).toBeInTheDocument();
  });
});
