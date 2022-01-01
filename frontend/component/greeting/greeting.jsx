import React from 'react';
import {Link} from "react-router-dom";

const Greeting = ({currentUser, logout}) => {
    // debugger
    const notLoggedIn = () => (
        <nav className="login-signup">
            <Link to="/login">Login</Link>
            &nbsp;
            <Link to="signup">Sign Up</Link>
        </nav>
    );

    const loggedIn = () => (
        <div>
            <h2>Hello, {currentUser.email}</h2>
            <button onClick={logout}>Log Out</button>
        </div>
    );
    // debugger
    return currentUser ? loggedIn() : notLoggedIn();
    // return loggedIn()
};

export default Greeting;
