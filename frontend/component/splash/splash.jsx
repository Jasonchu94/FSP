import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container'
import SearchBar from '../search_bar/search_bar';
import NavBarDropdown from '../nav_bar/navbar_dropdown';
import About from '../about/about';
import BusinessIndex from '../business/business_index';
import BusinessShowContainer from '../business/business_show_container'
import SanJoseContainer from './sanjose_container'

class Splash extends React.Component{

    componentWillMount(){
        this.props.fetchBusinesses();
    }
    render(){
      
        return(
            <div className='main-splash'>
                <div className="splash-container">
                    <NavBarContainer/>
                    <div className="splash-background-image">
                        <img src={window.splash} className='background-image'/>
                    </div>
                    <div className='search-logo-container'>
                        <Link to='/'><img className="splash-logo" src={window.yeplogo}/> </Link>                            
                    </div>
                    <div className='splash-search-bar-container'>
                        <SearchBar/>           
                    </div>     
                </div>
                <div className='splash-businesses'>                    
                    <SanJoseContainer/>
                </div>
                <div className='splash-categories'>
                   {/* <Categories/> */}

                </div>
                <footer className='about-links'>
                    <About/>
                </footer>
            </div>
        )
    }
}

export default Splash;