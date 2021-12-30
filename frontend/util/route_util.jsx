import React from 'react';
import { connect} from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({component: Component, path, LoggedIn, exact}) => (
    <Route path={path} exact={exact} render={(props)=>(
        !LoggedIn?(
            <Component {...props}/>
        ) : (
            <Redirect to='/'/>
        )
    )} />
);

const ProtRoute = ({component: Component, path, LoggedIn, exact}) => (
    <Route path={path} exact = {exact} render ={(props) => (
        LoggedIn ? (
            <Component {...props}/>
        ): (
            <Redirect to="/login"/>
        )
    )}/>
);
const mSTP = state => ({
    loggedIn: Boolean(state.session.currentUser)
});

export const AuthRoute = withRouter(connect(mSTP)(Auth));

export const ProtectedRoute = withRouter(connect(mSTP)(ProtRoute));