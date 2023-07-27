import React from "react";
import './style.css'
// import { Link } from "react-router-dom"
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
    return (
        <>
            <nav>
                <div className="logo">
                    <h1>
                       M<b>oo</b>vie 
                    </h1>
                </div>
                <div>
                    <form className="search-bar-form">
                        <input id="search-bar" type="text" href="#" placeholder="search ..." />
                        <IoSearchOutline className="search-icon"/>
                    </form>
                </div>
                <div className="nav-links">
                <li className="home">Home</li>
                <li>Mylist</li>
                <li><button className="sign-in">Sign In</button></li>
                </div>
                
            </nav>
        </>
    );
};

export default Navbar;