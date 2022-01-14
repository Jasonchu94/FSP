import React from 'react';
import { Link } from 'react-router-dom';
import NavBarDropdown from './navbar_dropdown';

const Navbar= ({currentUser, logout, notSplash}) => {

    const display = currentUser ? (
        <div className='navbar-dropdown'>
            <span className='navbar-drop-arrow'></span>
            <NavBarDropdown logout={logout} currentUser={currentUser}/>
        </div>
    ) : (      
            <div className="login-signup-buttons">
                <Link to="/login" className={notSplash ? 'business-login-button' : 'login-button'}>Login</Link>
                &nbsp;
                <Link to="/signup" className={notSplash ? 'business-signup-button' : 'signup-button'}>Sign Up</Link>
            </div>
    )

    return (
        <div className='nav-bar'>
            <div className="nav-links">            
                <Link to='/businesses'>Businesses</Link>
                &nbsp;&nbsp;
                <Link to={`/businesses/${Math.floor(Math.random()*10)}`}>I'm Feeling Hungry</Link>
            </div>
            <div className='right-nav-bar'>
                {display}
            </div>

        </div>
    )
}

export default Navbar;