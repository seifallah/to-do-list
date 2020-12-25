import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

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
            localStorage.setItem('loggedUser', "loggedIn")
            history.push('/todos')
        }
       else {
            setError("error...");
      }
    }
  
    return (
      <div className="loginForm--container">
         <Card className={"classes.root"}>
      <CardContent>
            <div class="form-group">
              <TextField 
                label="Email" 
                variant="outlined" 
                fullWidth
                type="email" value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
          </div>
          <div class="form-group">
              <TextField 
                  label="Password" 
                  variant="outlined" 
                  fullWidth
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
              />
          </div>
          {error&&<div className="loginForm-error">{error}</div>}
      </CardContent>
      <CardActions>
      <Button onClick={handleSubmit}
                disabled={!validateForm()} 
                variant="contained" 
                color="primary">Login
      </Button>
      </CardActions>
    </Card>
      </div>
    );
}

export default LoginForm