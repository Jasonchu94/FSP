import React from 'react';

import {Route, Routes, Link, Switch, HashRouter} from "react-router-dom"
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from '../component/session_form/login_form_container'
import SignupFormContainer from "../component/session_form/signup_form_container"
import SplashContainer from './splash/splash_container';
import NavBarContainer from "../component/nav_bar/nav_bar_container"
import  About  from './about/about';

const App =() =>(

    <div>    
        <Switch>
            <Route exact path='/' component={SplashContainer}/>   
            <AuthRoute exact path="/login" component={LoginFormContainer}/>
            <AuthRoute exact path='/signup' component={SignupFormContainer}/>
        </Switch>   
        <About/>
     
    </div>


)


export default App;