import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import { CheckboxElement } from "./CheckboxElement";

describe("testing CheckboxElement", () => {
  it("should to be in the page", () => {
    const el = { title: "10", refInput: React.createRef<HTMLInputElement>() };
    render(<CheckboxElement price={el} />);

    const input = screen.getByRole("checkbox") as HTMLInputElement;
    expect(input).toBeInTheDocument();
  });
});
