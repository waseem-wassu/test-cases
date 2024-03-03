import { fireEvent, render,screen } from "@testing-library/react"
import App from "./App"

//hooks in jest and React testing library

/*
Note:
1.beforeAll runs only once before all the test cases
2.beforeEach runs before each test case
3.afterAll runs only once after all the test cases
4.afterEach runs after each test case
*/

beforeAll(()=> {
  console.log("_______________Running before all _______________")
})

beforeEach(() => {
  console.log("_______________Running before each _______________")
})

afterAll(() => {
  console.log("****************** after all the test cases *********************");
})
afterEach(() => {
  console.log("****************** after each test case *********************");
})
test("Testing behaviour of the button",()=> {
  console.log("********* case-1 ******************");
  render(<App/>)
  let titleOfTheText = screen.getByText("test click event with button")
  expect(titleOfTheText).toBeInTheDocument()
})

test("Testing behaviour of the button",()=> {
  console.log("********* case-2 ******************");
  render(<App/>)
  let titleOfTheText = screen.getByText("test click event with button")
  expect(titleOfTheText).toBeInTheDocument()
  let getTheButton = screen.getByRole("button");
  fireEvent.click(getTheButton)
  expect(screen.getByText("Greeting is: heyya"))
})