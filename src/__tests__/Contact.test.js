import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // to have all jest-dom methods available
import Contact from "../components/Contact";

describe("contact us component test cases", () => {
  test("renders contact component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("renders button", () => {
    render(<Contact />);
    // const button = screen.getByRole("button");
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });

  test("renders input-name", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("name");
    expect(inputName).toBeInTheDocument();
  });

  test("renders input-message", () => {
    render(<Contact />);
    const inputMessage = screen.getByPlaceholderText("message");
    expect(inputMessage).toBeInTheDocument();
  });

  test("renders two inputs", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
  });
});
