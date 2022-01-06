import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../search_bar/search_bar'
import NavBarDropdown from '../nav_bar/navbar_dropdown'
class BusinessIndex extends React.Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchBusinesses();
    }
    render(){
        return(
            <div className='business-index-container'>               
                    <div className='business-nav-bar'>
                        <Link to='/'><img className='splash-logo' src={window.yeplogo}></img></Link>
                        <SearchBar/>
                        {this.props.currentUser ? 
                        (<NavBarDropdown currentUser ={this.props.currentUser} logout={this.props.logout} icon={true}/>) :
                        (<div className="login-signup-buttons">
                            <Link to="/login" >Login</Link>
                            &nbsp;
                            <Link to="/signup" className='signup-button'>Sign Up</Link>
                        </div>)
                        }
                    </div>
              
                <div className='business-photos-container'>
               
                </div>
                <div className='busiess-review-container'>
               
                </div>
                <div className='info-sidebar'>
               
                </div>

            </div>
        )
    }
}

export default BusinessIndex;