import React from 'react';
import { Link } from 'react-router-dom';

const Navbar= ({currentUser, logout}) => {

    const display = currentUser ? (
        <div className='navbar-dropdown'>
            <button className ='navbar-dropdown-button'></button>
            <div>
                {/* <p>{currentUser.first_name.at(0).toUpperCase() + currentUser.first_name.slice(1)}{currentUser.last_name.at(0).toUpperCase()}</p> */}
            </div>
            <button onClick={logout}>Log Out</button>
        </div>
    ) : (      
            <div className="login-signup-buttons">
                <Link to="/login" >Login</Link>
                &nbsp;
                <Link to="/signup" className='signup-button'>Sign Up</Link>
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