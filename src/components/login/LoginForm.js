import React, {useState} from "react";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

  
    const validateForm =() => {
      return email.length > 0 && password.length > 0;
    }
  
    const handleSubmit =(e) => {
      e.preventDefault();
      if(email=== process.env.REACT_APP_USER_EMAIL && password === process.env.REACT_APP_USER_PASSWORD) 
        {
            history.push('/todos')
        }
       else {
            setError("error...");
      }
    }
  
    return (
      <div className="loginForm--container">
        <form onSubmit={handleSubmit}>
            <div class="form-group">
                <label>Email</label>
                <input
                autoFocus
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
          </div>
          <div class="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error&&<div className="loginForm-error">{error}</div>}
          <button type="submit" disabled={!validateForm()}>
            Login
          </button>
        </form>
      </div>
    );
}

export default LoginForm