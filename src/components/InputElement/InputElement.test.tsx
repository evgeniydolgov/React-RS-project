import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import { InputElement } from "./InputElement";

describe("testing InputElement", () => {
  const el = {
    title: "test",
    type: "text",
    refInput: React.createRef<HTMLInputElement>(),
  };
  it("should be render title", () => {
    render(<InputElement {...el} />);

    const component = screen.getByText("test");
    expect(component).toBeInTheDocument();
  });
  it("should be type text input", () => {
    render(<InputElement {...el} />);

    const component = screen.getByRole("textbox") as HTMLInputElement;
    expect(component).toBeInTheDocument();
  });
});
