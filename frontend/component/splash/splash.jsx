import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component{
    render(){
        return(
            <div className="splash-container">
                <div className="splash-background-image">
                    <img src={window.splash} className='background-image'/>
                </div>
                <div className="clickable-logo-container">
                    <Link to='/'> <img className="splash-logo" src={window.yeplogo}/> </Link>
                </div>

            </div>
        )
    }
}

export default Splash;