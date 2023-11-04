import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-1 fixed-top">
        <div className="container-fluid ">
          <Link className="navbar-brand fs-4" to="/">
            NewsApp
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav px-3">
              <li className="nav-item px-3">
                <Link className="nav-link" aria-current="page" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item px-3 ">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>

              <li className="nav-item px-3">
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link className="nav-link" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;