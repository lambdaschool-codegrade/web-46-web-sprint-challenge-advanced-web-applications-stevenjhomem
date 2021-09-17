import React, {useState} from "react";

const Login = () => {

  const [formValues, setFormValues]=useState({
    username: "",
    password: "",
  })
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const error = "";
  //replace with error state

  return (
    <div className='login-form'>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <form onSubmit={handleLogin}>
          <label htmlFor="username">username:</label>
          <input
            id="username"
            name="username"
            type="text"
            value={formValues.username}
            onChange={handleChanges}
          />
        
          <label htmlFor="password">password:</label>
          <input
            id="password"
            name="password"
            type="password"
            value={formValues.password}
            onChange={handleChanges}
          />

          <p id="error" className="error">{error}</p>

          <button id="submit" className="button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"