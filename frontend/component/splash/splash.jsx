import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container'
import SearchBar from '../search_bar/search_bar';

class Splash extends React.Component{
    render(){
        return(
            <div className="splash-container">
                <NavBarContainer/>
                <div className="splash-background-image">
                    <img src={window.splash} className='background-image'/>
                </div>
                <div className='search-logo-container'>
                    <Link to='/'><img className="splash-logo" src={window.yeplogo}/> </Link>                            
                    <SearchBar/>                      
                </div>
          

            </div>
        )
    }
}

export default Splash;