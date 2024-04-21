import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
        <div className="container">
          <div className="logo">
            <img src="/logocare1.png " />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleNavToggle}
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto">
            <li className="nav-item" onClick={closeNav}>
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item" onClick={closeNav}>
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item" onClick={closeNav}>
                <Link className="nav-link" to="/service">
                  Services
                </Link>
              </li>
              <li className="nav-item" onClick={closeNav}>
                <Link className="nav-link" to="/case">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item" onClick={closeNav}>
                <Link className="nav-link" to="/team">
                  Team
                </Link>
              </li>
              <li className="nav-item" onClick={closeNav}>
                <Link className="nav-link" to="/review">
                  Reviews
                </Link>
              </li>
              <li className="nav-item" onClick={closeNav}>
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
              </li>
            </ul>
            <Link
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className="btn btn-warning text-white rounded-0  ms-lg-3"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
