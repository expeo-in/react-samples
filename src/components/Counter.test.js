import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

test("counter button should increment count value", () => {
  render(<Counter></Counter>);

  expect(screen.getByText("Counter - 0")).toBeInTheDocument();

  fireEvent.click(screen.getByText("Increment"));
  fireEvent.click(screen.getByText("Increment"));
  fireEvent.click(screen.getByText("Increment"));
  fireEvent.click(screen.getByText("Increment"));

  expect(screen.getByText("Counter - 4")).toBeInTheDocument();
});

test("should display msg when the user enters", async () => {
  render(<Counter></Counter>);

  // fireEvent.change(screen.getByRole("textbox"), {
  //   target: { value: "react message" },
  // });

  userEvent.type(screen.getByRole("textbox"), "react message");

  screen.debug();

  expect(screen.getByText("react message")).toBeInTheDocument();
});
