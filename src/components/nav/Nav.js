import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
    <div className="topNavigation--container">
        <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/todos">todo</Link>
            </li>
        </ul>
    </div>);
}
 
export default NavBar;