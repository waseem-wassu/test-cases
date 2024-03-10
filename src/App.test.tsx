import { act, fireEvent, logRoles, render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import User from "./User";

test("testing events in jest and react testing lib", async() => {
  render(<App />);
  
  let inp1 = screen.getByRole("textbox");
   act(() => {
    userEvent.type(inp1,"Waseem")
  })
  
  expect(screen.getByText("Waseem")).toBeInTheDocument()

});


/**
 Note:
 In this scenario, where we're testing User component
 in isolation and passing a mocked changeStatus function as a prop,
 you won't be able to directly assert that the status has changed to 'Online' because 
 the mock function doesn't actually change the status.
 Instead, you should focus on testing that the changeStatus function is being called when the button is clicked
 */

 /**
  In this test, you're verifying that the changeStatus function has been called when the button is clicked,
  which confirms that the interaction between ComponentB and the parent component (ComponentA) works as expected.
  */

test("changeStatus button toggles user status", async () => {
  const changeStatus = jest.fn();
  const { container, debug, getByTestId, getByText } = render(
    <User name="Waseem" status={false} changeStatus={changeStatus} />
  );


  expect(screen.getByText("Offline")).toBeInTheDocument();
  const button = getByTestId("toggleButton");

  act(() => {
    userEvent.click(button);
  });

  // Assert that changeStatus has been called
  expect(changeStatus).toHaveBeenCalledTimes(1);
});


//new one

test('changeStatus updates the status state', () => {
  const { getByTestId,getByText } = render(<App />);
  // Find the button that triggers changeStatus
  const button = getByTestId('toggleButton');
  // Trigger the button click to call changeStatus
  act(() => {
    userEvent.click(button);
  })

  // Assert that the status state has been updated correctly
  const statusText = getByText('Online');
  expect(statusText).toBeInTheDocument();
});


//whenever we are dealing with state changing elements we are getting warning to use this under act func 
/*
//Note: 
1.We use act to wrap the user interaction (userEvent.click) that triggers a state update in the component.
2.Remember that act is primarily used for updating the DOM in React tests, and it should be used whenever 
you're interacting with your component or performing asynchronous operations that result in state updates
*/

