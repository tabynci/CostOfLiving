// import { render, fireEvent, screen, waitFor } from "@testing-library/react";

// import Register from './views/Register';

// import user from '@testing-library/user-event';
// import { Button } from "react-bootstrap";




// describe("Register", () => {
//   const onSubmit =jest.fn();
  
//   beforeEach(() =>{
//     onSubmit.mockClear();
//     render(<Register onSubmit={onSubmit} />);
//    });

//   it('onSubmit is called when all fileds pass validation',async () => {
//     user.type(getUsername(),'zaid');
//     user.type(getEmail(), 'zaid@gmail.com');
//     user.type(getAge(),34)
//     user.type(getPassword(),'Zaid12')
//     user.click(screen.getByRole('button', {name: /register/i}));

//     await waitFor(()=>{
//       expect(onSubmit).toHaveBeenCalledTimes({lazy:true});
//     })
// });

// });
// function getUsername(){
//   return screen.getByRole('textbox',{
//     name:/username/i
//   });
// }
// function getEmail(){
//   return screen.getByRole('textbox', {name:/email/i})
// }

// function getAge(){
//   return screen.getByRole('textbox', {name:/age/i})
// }

// function getPassword(){
//   return screen.getByRole('textbox',{name:/password/i})
// }


// test('handleSubmit', () => {
//   render(<Register />);

//   const username= screen.getByTestId("usernameTest")
//   const email= screen.getByTestId("usernameTest")
//   const age= screen.getByTestId("ageTest")
//   const password= screen.getByTestId("passwordTest")
//   const submitBtn= screen.getByTestId("submitTset")

//   console.log(username);

//   // interact with those element

//   fireEvent.click(submitBtn)
    
// });