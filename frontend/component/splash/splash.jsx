import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component{

    // constructor(props){
    //     super(props)
    // }


    render(){
        return(
            <div>
                <div className="clickable-logo-container">
                    <Link to='/'> <img className="Splash-Logo" src={window.yeplogo}/> </Link>
                </div>

            </div>
        )
    }
}

export default Splash;