import React, {useState} from "react";
import axiosWithAuth from "../helpers/axiosWithAuth";
import { useHistory } from "react-router-dom";

const Login = () => {

  const {push} = useHistory();

  const [credentials, setCredentials]=useState({
    username: "",
    password: "",
  })

  const [error, setError] = useState("");

  const handleChanges = (e)=>{
    setCredentials({
      ...credentials,
      [e.target.name]:e.target.value,
    })
  }

  const handleLogin = (e) => {
    e.preventDefault();
    axiosWithAuth().post('/login', credentials)
                   .then(res => {
                     localStorage.setItem('token',res.data.payload);
                     setError("");
                     push('/bubblepage');
                   })
                   .catch(err => {
                    if (err.response.status === 403) {
                      setError("Username or Password not valid.");
                    }
                   })
  }

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
            value={credentials.username}
            onChange={handleChanges}
          />
        
          <label htmlFor="password">password:</label>
          <input
            id="password"
            name="password"
            type="password"
            value={credentials.password}
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