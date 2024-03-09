//Chapter-4 is all about theoritical part where get more insights of the pattern that we are following during this

import App from "./App"
import {render, screen} from "@testing-library/react"

/* 
                       Steps in testing UI

1.Render Component 
2.Find element and action
3.Assertions
*/

/*
Differnts methods to find RTL elements 

1.By element type
2.By element name
3.By element id
4.By test id
etc
*/

/*

Types of RTL queries

1.Find Single Element
 -a:getBY
 -b:queryBy
 -c:findBy

2.Find multiple Element
 -a:getAllBy
 -b:QueryAllBy
 -c:findAllBy
 */

//This will be very helpful for your interviews

// let starts with single elements

//*************************getByRole Query***********************************
test("Checking if button is available", () => {
  render(<App />);

  /*************************************** if you have only one button in your testing component****************** */
    // let findOutButton = screen.getByRole("button");
    // expect(findOutButton).toBeInTheDocument();
    //if I have only one button at that time I can use this role directly 
    
  /*************************************** if you have more than one button in your testing component****************** */
  let findOutButton = screen.getByRole("button",{name:"Click"});
  let findOutButton2 = screen.getByRole("button",{name:"Button 2"});

  expect(findOutButton).toBeInTheDocument();
  expect(findOutButton2).toBeInTheDocument();
});


test("Testing custom roles", () => {
  render(<App />);
  let checkCustomRole = screen.getByRole("test-role");
  expect(checkCustomRole).toBeInTheDocument();
});





//now lets test multiple line element

//*************************getAllByRole Query***********************************
test("Checking if button is available", () => {
  render(<App />);
  let findAllButtonAtOnce = screen.getAllByRole("button");

  // Here we get the output as an array

  //we can achieve this with various merthod

  //Method-1 : by accessing single elements with the help of index of an array

  // console.log(findAllButtonAtOnce, "checks whats here");
  expect(findAllButtonAtOnce[0]).toBeInTheDocument();

  //Method-2 : by looping an array to get the access to the elements dynamically

  for(let i=0; i< findAllButtonAtOnce.length; i++) {
    expect(findAllButtonAtOnce[i]).toBeInTheDocument();
  }
});

test("Lets try to test Select component",() => {
     render(<App/>)
     let optionsArray= screen.getAllByRole('option')
     for(let i=0; i< optionsArray.length; i++) {
      expect(optionsArray[i]).toBeInTheDocument();
    }
})

//Note:  
// Still we have many more things here but I will try to cover that in a next chapter may be with the actual project

//till now we have covered only synchronous cases 



