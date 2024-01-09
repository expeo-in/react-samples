import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("greet", () => {
  it("should dispay user when user is passed", () => {
    render(<Greet name="ganesh"></Greet>);

    expect(screen.getByText("Hi ganesh")).toBeInTheDocument();
    expect(screen.queryByText("Hi user")).not.toBeInTheDocument();
  });

  it("should dispay general message when user is not passed", () => {
    render(<Greet></Greet>);

    expect(screen.getByText("Hi user")).toBeInTheDocument();

    //const element = screen.getByText("test message");
    //expect(element).not.toBeInTheDocument();

    //const element = screen.queryByText("test message");
    //expect(element).not.toBeInTheDocument();
  });
});
