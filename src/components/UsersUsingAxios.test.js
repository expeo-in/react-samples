import * as React from "react";
import axios from "axios";
import { render, screen } from "@testing-library/react";
import UsersUsingAxios from "./UsersUsingAxios";

jest.mock("axios");

test("should show the data from the api", async () => {
  axios.get.mockImplementationOnce(() => {
    return Promise.resolve({
      data: [
        { id: 1, name: "ganesh" },
        { id: 2, name: "siva" },
        { id: 3, name: "ram" },
      ],
    });
  });

  render(<UsersUsingAxios></UsersUsingAxios>);

  const items = await screen.findAllByRole("listitem");
  screen.debug();
  expect(items.length).toBe(3);
});

test("should display error message when api returns error", async () => {
  axios.get.mockImplementationOnce(() => {
    return Promise.reject({ message: "request failed" });
  });

  render(<UsersUsingAxios></UsersUsingAxios>);

  const msg = await screen.findByText("request failed");

  expect(msg).toBeInTheDocument();
});
