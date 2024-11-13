import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases", () => {
  it("Testing Contact page rendered onto the DOM", () => {
    render(<Contact />);

    //Querying
    const headings = screen.getAllByRole("heading");

    //Assertion
    headings.forEach((heading) => {
      expect(heading).toBeInTheDocument();
    });
  });

  it("Testing button inside Contact page", () => {
    render(<Contact />);

    //Querying
    const button = screen.getByText("Send Message");

    //Assertion
    expect(button).toBeInTheDocument();
  });

  it("Testing input inside Contact page", () => {
    render(<Contact />);

    //Querying
    const input = screen.getByPlaceholderText("Name");

    //Assertion
    expect(input).toBeInTheDocument();
  });

  it("Testing multiple input boxes inside Contact page", () => {
    render(<Contact />);

    //Querying
    const input = screen.getAllByRole("textbox");

    //Assertion
    expect(input.length).toBe(3);
  });
});
