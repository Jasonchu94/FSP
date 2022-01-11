import React from 'react';

import {Route, Routes, Link, Switch, HashRouter} from "react-router-dom"
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from '../component/session_form/login_form_container'
import SignupFormContainer from "../component/session_form/signup_form_container"
import SplashContainer from './splash/splash_container';
import BusinessIndexContainer from './business/business_index_container'
import BusinessShowContainer from './business/business_show_container'
import SearchResultContainer from './search_result/search_result_container'
import ReviewFormContainer from './review/review_form_container'
import About from './about/about';


const App =() =>(
   
    <div className='app'>    
        <Switch>
            <Route exact path='/' component={SplashContainer}/>   
            <AuthRoute exact path="/login" component={LoginFormContainer}/>
            <AuthRoute exact path='/signup' component={SignupFormContainer}/>
            <Route exact path = '/businesses' component={BusinessIndexContainer}/>
            <Route exact path ='/businesses/:businessId' component={BusinessShowContainer}/>  
            <Route path='/search' component={SearchResultContainer}/>
            <Route exact path='/businesses/:businessId/review/new' component={ReviewFormContainer}/>
        </Switch>   
        {/* <About/> */}
     
    </div>


)


export default App;