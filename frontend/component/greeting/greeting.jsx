import React from 'react';
import {Link} from "react-router-dom";

const Greeting = ({currentUser, logout}) => {
    const notLoggedIn = () => (
        <div className='greeting-container'>
            <nav className="login-signup-container">
                <Link to="/login" className='login-signup-button'>Login</Link>
                &nbsp;
                <Link to="signup" className='login-signup-button'>Sign Up</Link>
            </nav>
        </div>
    );


    const loggedIn = () => (
        <div>
            <h2>Hello, {currentUser.first_name.charAt(0).toUpperCase() + currentUser.first_name.slice(1)}</h2>
            <button onClick={logout}>Log Out</button>
        </div>
    );

    return currentUser ? loggedIn() : notLoggedIn();
};

export default Greeting;
