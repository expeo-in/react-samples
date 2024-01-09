import { render, screen } from "@testing-library/react";
import App from "./App";

test("render app component", () => {
  render(<App />);

  //screen.debug();

  const element = screen.getByText("React App");

  expect(element).toBeInTheDocument();
});
