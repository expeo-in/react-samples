import { render, screen } from "@testing-library/react";
import UsersAsync from "./UsersAsync";

describe("UsersAsync", () => {
  it("should render users list", async () => {
    render(<UsersAsync></UsersAsync>);

    expect(await screen.findByText("Leanne Graham")).toBeInTheDocument();
  });
});
