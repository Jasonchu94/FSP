import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../search_bar/search_bar'
import NavBarDropdown from '../nav_bar/navbar_dropdown'
import BusinessIndexItem from './business_index_item'
class BusinessIndex extends React.Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){
      this.props.fetchBusinesses();
    }
    render(){

        const {businesses} = this.props
    
        return(
            <div className='business-index-container'>               
                    <div className='business-nav-bar'>
                        <Link to='/'><img className='splash-logo' src={window.yeplogo}></img></Link>
                        <SearchBar class={"business"}/>
                        {this.props.currentUser ? 
                        (<NavBarDropdown currentUser ={this.props.currentUser} logout={this.props.logout} icon={true}/>) :
                        (<div className="login-signup-buttons">
                            <Link to="/login" >Login</Link>
                            &nbsp;
                            <Link to="/signup" className='signup-button'>Sign Up</Link>
                        </div>)
                        }
                    </div>
                    <div className='business-list-container'> 
                        <div className='business-filter'>
                            FILTER HERE
                        </div>
                        <div className='business-list'>
                            <h1 className='results'>All results</h1>
                            { businesses.map(business => (
                                <BusinessIndexItem
                                business = {business}
                                key = {business.id}
                                businesses = {businesses}                                
                                />                            
                                ))
                            }                           
                        </div>
                        <div className='business-map'>
                            EL MAP HERE
                        </div>

                    </div>
          

            </div>
        )
    }
}

export default BusinessIndex;