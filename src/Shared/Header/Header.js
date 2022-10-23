import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-200 text-neutral-content">
        <Link
          to={"/register"}
          className="normal-case text-neutral text-xl ml-auto mr-5"
        >
          Register
        </Link>
        <Link to={"/login"} className="normal-case text-neutral text-xl mr-5">
          Login
        </Link>
        <Link
          to={"/destination"}
          className="normal-case text-neutral text-xl mr-5"
        >
          Destination
        </Link>
        <Link to={"/contact"} className="normal-case text-neutral text-xl mr-5">
          Contact
        </Link>
        <Link to={"/home"} className="normal-case text-neutral text-xl mr-5">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Header;
