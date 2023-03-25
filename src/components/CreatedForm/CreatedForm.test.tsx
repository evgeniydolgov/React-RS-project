import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import { CreatedForm } from "./CreatedForm";
import { CarterCard } from "../CardList/CardList";

const state = {
  cardsParams: [] as CarterCard[],
  name: {
    title: "test",
    type: "text",
    refInput: React.createRef<HTMLInputElement>(),
  },
  date: {
    title: "Creation date: ",
    type: "date",
    refInput: React.createRef<HTMLInputElement>(),
  },
  file: {
    title: "Image: ",
    type: "file",
    refInput: React.createRef<HTMLInputElement>(),
  },
  fraction: {
    title: "Fraction: ",
    refSelect: React.createRef<HTMLSelectElement>(),
  },
  cost: [
    { title: "1", refInput: React.createRef<HTMLInputElement>() },
    { title: "5", refInput: React.createRef<HTMLInputElement>() },
    { title: "10", refInput: React.createRef<HTMLInputElement>() },
  ],
  frame: [
    { title: "Yes", refInput: React.createRef<HTMLInputElement>() },
    { title: "No", refInput: React.createRef<HTMLInputElement>() },
  ],
  nameError: false,
  dateError: false,
  costError: false,
  imageError: false,
  FractionError: false,
  goldenFrameError: false,
  success: false,
  formRef: React.createRef<HTMLFormElement>(),
};

describe("testing CreatedForm", () => {
  it("should be render textbox", () => {
    render(<CreatedForm {...state} />);

    const component = screen.getByRole("textbox");
    expect(component).toBeInTheDocument();
  });
  it("should be render test word", () => {
    render(<CreatedForm {...state} />);

    const component = screen.getByText("test");
    expect(component).toBeInTheDocument();
  });
});
