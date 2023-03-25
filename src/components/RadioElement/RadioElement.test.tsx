import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import { RadioElement } from "./RadioElement";

describe("testing RadioElement", () => {
  const el = { title: "test", refInput: React.createRef<HTMLInputElement>() };
  it("should be render title", () => {
    render(<RadioElement price={el} />);

    const component = screen.getByText("test");
    expect(component).toBeInTheDocument();
  });
  it("should be type radio input", () => {
    render(<RadioElement price={el} />);

    const component = screen.getByRole("radio") as HTMLInputElement;
    expect(component).toBeInTheDocument();
  });
});
