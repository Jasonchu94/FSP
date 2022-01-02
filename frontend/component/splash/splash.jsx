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
                    <Link to='/'> <img className="Splash-Logo" src='https://fontslogo.com/wp-content/uploads/2013/03/Yelp-Logo-Font.jpg'/> </Link>
                </div>

            </div>
        )
    }
}

export default Splash;