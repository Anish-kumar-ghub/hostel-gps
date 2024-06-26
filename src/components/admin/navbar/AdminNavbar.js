import React, { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigator=useNavigate();
  const handleLogout = () => {
    // Clear any user authentication tokens or data from local storage
    localStorage.clear(); // clearing the local storage
    // Redirect the user to the login page or any other desired action
    navigator('/admin'); // Redirect to the login page
  };

  const handleLogoutKeyPress = useCallback(
    (event) => {
      // Trigger logout if the Enter key is pressed
      if (event.key === "Enter") {
        handleLogout();
      }
    },
    [handleLogout]
  );
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/admin-home">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
       
      </div>
      <form className="container-fluid justify-content-start">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link mx-2" to="/approve">
                CHANGE STATUS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/leave-request">
                ALL PENDING REQUEST
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/search-request">
                SEARCH REQUEST
              </Link>
            </li>
          </ul>
        </div>
      </form>
      <div className="collapse navbar-collapse mx-3" id="navbarNav">
        <div className="nav-link"  onClick={handleLogout} onKeyDown={handleLogoutKeyPress}>
          LOGOUT
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
