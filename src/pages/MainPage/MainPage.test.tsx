import React from "react";
import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import { MainPage } from "./MainPage";

describe("Testing Rick", () => {
  it(`should be possible to remove items from the cart`, async () => {
    const { findByText } = render(<MainPage />);
    expect(await findByText("Testing Rick")).toBeInTheDocument();
    expect(await findByText("Testing Morty")).toBeInTheDocument();
  });
});
