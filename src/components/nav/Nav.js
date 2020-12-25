import React from "react";
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const NavBar = () => {
    return ( 
    <div className="topNavigation--container">

<AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            Todo App
          </Typography>
          <div className="nav-right">
            <Button color="inherit"><Link to="/">Home</Link></Button>
            <Button color="inherit"><Link to="/todos">todo</Link></Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>);
}
 
export default NavBar;