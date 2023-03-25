import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import { ErrorMessage } from "./ErrorMessage";

describe("testing ErrorMessage", () => {
  it("should be render message", () => {
    const el = "testing the element";
    render(<ErrorMessage message={el} />);

    const component = screen.getByText("Error! Please testing the element");
    expect(component).toBeInTheDocument();
  });
});
