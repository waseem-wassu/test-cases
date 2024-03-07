import { fireEvent, render,screen } from "@testing-library/react"
import App from "./App"

//Snapshot testing : once all the development is completed then we need to implement this.

/*
 When we use `toMatchSnapshot`,
 Jest saves a picture of the output.Later, it compares this picture to the current output.
 If they're different, the test fails.'

 if you want to update the changes then just press u 


 
 Note:
 Snapshot tests shouldn't replace traditional unit or integration tests.
 Use them together with other testing methods for better coverage.
*/

test("Lets try snapshot testing",() => {
  const container = render(<App/>)
  expect(container).toMatchSnapshot()

})