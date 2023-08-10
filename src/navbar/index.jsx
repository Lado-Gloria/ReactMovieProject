import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import './style.css';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-barr">
        <div className="nav">
          <input type="checkbox" id="nav-check"></input>
          <div className="nav-header">
            <div className="nav-title">
              <h2 className="logo">M<b>oo</b>vie</h2>
            </div>
          </div>
          <div className="nav-btn">
            <label htmlFor="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
          <div className="nav-links">
            <a href="#">
              <form className="search-bar-form">
                <input
                  id="search-bar"
                  type="text"
                  placeholder="search ..."
                />
                <IoSearchOutline
                  className="search-icon"
                />
              </form>
            </a>
            <a href="#">Home</a>
            <a href="#">MyList</a>
            <a href="#" className="sign-in">
              Sign In
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;