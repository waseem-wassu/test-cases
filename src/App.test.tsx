import { fireEvent, render,screen } from "@testing-library/react"
import App from "./App"

test("Testing behaviour of the button",()=> {
    render(<App/>)
    let titleOfTheText = screen.getByText("test click event with button")
    expect(titleOfTheText).toBeInTheDocument()
    let getTheButton = screen.getByRole("button");
    fireEvent.click(getTheButton)
    expect(screen.getByText("Greeting is: heyya"))
})