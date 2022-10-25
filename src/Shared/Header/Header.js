import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/ContextProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="navbar bg-base-200 text-neutral-content flex justify-end">
        {user ? (
          <>
            <Link
              to={"/login"}
              className="normal-case text-neutral text-xl ml-3"
            >
              Login
            </Link>
            <Link
              onClick={handleSignOut}
              className="normal-case text-neutral text-xl ml-3"
            >
              Logout
            </Link>
          </>
        ) : (
          <Link
            to={"/register"}
            className="normal-case text-neutral text-xl ml-3"
          >
            Register
          </Link>
        )}
        <Link
          to={"/destination"}
          className="normal-case text-neutral text-xl ml-3"
        >
          Destination
        </Link>
        <Link to={"/contact"} className="normal-case text-neutral text-xl ml-3">
          Contact
        </Link>
        <Link to={"/home"} className="normal-case text-neutral text-xl ml-3">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Header;
