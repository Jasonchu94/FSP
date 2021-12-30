import React from 'react';
import {Link} from "react-router-dom";

const Greeting = ({currentUser, logout}) => {

    const notLoggedIn = () => (
        <nav className="login-signup">
            <Link to="/login">Login</Link>

            <Link to="signup">Sign Up</Link>
        </nav>
    );

    const loggedIn = () => (
        <div>
            <h2>Hello, {currentUser.first_name}</h2>
            <button onClick={logout}>Log Out</button>
        </div>
    );

    return currentUser ? loggedIn(): notLoggedIn();
};

export default Greeting;
