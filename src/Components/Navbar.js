import React from "react";
import { Link } from "react-router-dom";
const Navbar = (props) => {
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
            <div class="nav-item px-3 float-end" role="group" aria-label="Basic example">
              <a
                type="button"
                onClick={() => {
                  props.setCountry("us");
                }}
                class="btn btn-dark fs-6"
              >
                US
              </a>
              <a
                type="button"
                onClick={() => {
                  props.setCountry("in");
                }}
                class="btn btn-dark"
              >
                IN
              </a>
            </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
