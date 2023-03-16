import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import App from "./App";

describe("App"),
  () => {
    it("Renders hello world", () => {
      render(<App />);

      expect(
        screen.getByRole("heading", {
          level: 2,
        }),
      ).toHaveTextContent("Hello World");
    });
  };
