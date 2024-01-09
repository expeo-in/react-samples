import { fireEvent, render, screen } from "@testing-library/react";
import Card from "./Card";

test("card component should render heading and details", () => {
  render(<Card heading="product 1 heading">product 1 details</Card>);

  expect(screen.getByText("product 1 heading")).toBeInTheDocument();
});

test("card component should call the function pass on details click", () => {
  const handleClick = jest.fn();

  //   let flag = false;
  //   const handleClick = function () {
  //     flag = true;
  //   };

  render(
    <Card heading="product 1 heading" onDetailClick={handleClick}>
      product 1 details
    </Card>
  );

  fireEvent.click(screen.getByText("Details"));

  expect(handleClick).toHaveBeenCalled();
  //expect(flag).toBe(true);
});
