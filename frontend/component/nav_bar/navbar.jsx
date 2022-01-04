import React from 'react';
import { Link } from 'react-router-dom';

const Navbar= ({currentUser, logout}) => {

    const display = currentUser ? (
        <div className='navbar-container'>
            <button className ='navbar-dropdown-button'></button>
            <div className = 'greeting-container'>
                <h2>Hello, {currentUser.first_name.charAt(0).toUpperCase() + currentUser.first_name.slice(1)}</h2>
            </div>
            <button onClick={logout}>Log Out</button>
        </div>
    ) : (      
            <div className="login-signup-buttons">
                <Link to="/login" >Login</Link>
                &nbsp;
                <Link to="/signup" >Sign Up</Link>
            </div>
    )

    return (
        <div className='nav-bar'>
            <div className="nav-links">
                <Link>Write a Review</Link>
                &nbsp;
                <Link>Events</Link>
                &nbsp;
                <Link>Talk</Link>
                &nbsp;
                <Link>Yelp for Business</Link>
            </div>
            <div className='right-nav-bar'>
                {display}
            </div>

        </div>
    )
}

export default Navbar;