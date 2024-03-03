import { fireEvent, render,screen } from "@testing-library/react"
import App from "./App"
/*
test("checking the form",() => {
    //first jis component ku test karthin use render field mein likhlena
    render(<App/>)
    //ab usey find karna screen mein jo hamna hona
    let title1 = screen.getByText('Enter the username')
    //ab woh hai ya nai dekhna App component mein
    expect(title1).toBeInTheDocument()
})

test("checking input field",() => {
  //first jis component ku test karthin use render field mein likhlena
  render(<App/>)
  //ab usey find karna screen mein jo hamna hona
   let findInputField = screen.getByRole("textbox")
   //isey kaisa b define kar sakthin ya phir upar ka ya nicche ka
   let findInputField2 = screen.getByPlaceholderText("username")
  //ab woh hai ya nai dekhna App component mein
  expect(findInputField).toBeInTheDocument()
}) */

//ab yahan se input field ku change karne ka 


test("checking input field",() => {
  //first jis component ku test karthin use render field mein likhlena
  render(<App/>)
  //ab usey find karna screen mein jo hamna hona
   let findInputField = screen.getByRole("textbox")
   //ye onchange event ku
   fireEvent.change(findInputField,{target:{value:"a"}})
  //ab woh hai ya nai dekhna App component mein
  expect(findInputField).toHaveValue("a")
})

//ab button ka submit check karinge

