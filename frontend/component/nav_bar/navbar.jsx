import React from 'react';
import { Link } from 'react-router-dom';
import NavBarDropdown from './navbar_dropdown';

const Navbar= ({currentUser, logout}) => {

    const display = currentUser ? (
        <div className='navbar-dropdown'>
            <span className='navbar-drop-arrow'></span>
            <NavBarDropdown logout={logout} currentUser={currentUser}/>
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