import React from "react";
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <nav>
      <h2>Mentors</h2>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/signup"><li>Signup</li></Link>
        <Link to="/signin"><li>Signin</li></Link>
      </ul>
    </nav>
  )
};

export default NavLinks;
