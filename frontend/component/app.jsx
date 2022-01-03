import React from 'react';

import {Route, Routes, Link, Switch, HashRouter} from "react-router-dom"
import Greeting from './greeting/greeting';
import LoginFormContainer from '../component/session_form/login_form_container'
import SignupFormContainer from "../component/session_form/signup_form_container"
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashContainer from './splash/splash_container';
import { About } from './about/about';

const App =() =>(

    <div>
        <header>
            this is YEP!
            <Greeting/>
            <SplashContainer/>
        </header>
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer}/>
            <AuthRoute exact path='/signup' component={SignupFormContainer}/>
        </Switch>
        <footer>
            <About/>
        </footer>
    </div>


)


export default App;