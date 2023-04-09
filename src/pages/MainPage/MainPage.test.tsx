import React from "react";
import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import { MainPage } from "./MainPage";

describe("Testing Rick", () => {
  it(`should be possible to remove items from the cart`, async () => {
    const { findByText } = render(<MainPage />);
    it("fetch and render Testing Rick", async () => {
      expect(await findByText("Testing Rick")).toBeInTheDocument();
    });
    it("fetch and render Testing Morty", async () => {
      expect(await findByText("Testing Morty")).toBeInTheDocument();
    });
  });
});
