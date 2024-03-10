import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("Initial when page loads", () => {
  render(<App />);
  let mainHeading = screen.getByText("findBy and findAllBy");
  expect(mainHeading).toBeInTheDocument();
});

test("Check the data if API is fetch successfully", async () => {
  render(<App />);
  let mainHeading = screen.getByText("findBy and findAllBy");
  expect(mainHeading).toBeInTheDocument();

  //since API is involved here i need to use async now
  let getTheElement = screen.getByText("bye");
  expect(getTheElement).toBeInTheDocument();

  //after API loads
  let getTheElement1 = await screen.findByText("hello");
  expect(getTheElement1).toBeInTheDocument();
});

//lets use userEvent here

test("User event setup", async() => {
  render(<App />);
  let btn = screen.getByText("Click Me");
  await  userEvent.click(btn);
  expect(screen.getByText("Waseem")).toBeInTheDocument();
});
