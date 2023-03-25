import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import { SelectElement } from "./SelectElement";

describe("testing SelectElement", () => {
  const el = { title: "test", refInput: React.createRef<HTMLInputElement>() };
  it("should be render title", () => {
    render(<SelectElement {...el} />);

    const component = screen.getByText("test");
    expect(component).toBeInTheDocument();
  });
  it("should be render text", () => {
    render(<SelectElement {...el} />);

    const component = screen.getByText("Neutral");
    expect(component).toBeInTheDocument();
  });
});
