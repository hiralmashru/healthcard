import React from "react";
import {Link} from 'react-router-dom';
const Navbar = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => onRouteChange("signout")}
          className="f3 link dim black underline pa3 pointer"
        > <Link to="homepage">
          Sign Out </Link>
        </p>
        <p
          onClick={() => onRouteChange("signin")}
          className="f3 link dim black underline pa3 pointer"
        > <Link to="login">
          Health History </Link>
        </p>
        <p
          onClick={() => onRouteChange("register")}
          className="f3 link dim black underline pa3 pointer"
        ><Link to="registration">
          Personal Info </Link>
        </p>
      </nav>
    );
  }  else{
    return(
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        null
      </nav>
    );
  }
};

export default Navbar;
