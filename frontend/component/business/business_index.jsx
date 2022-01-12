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
        window.scrollTo(0,0)
      this.props.fetchBusinesses();
      this.props.fetchReviews();
    }
    render(){

        const {businesses, reviews} = this.props
    
        return(
            <div className='business-index-container'>               
                    <div className='business-nav-bar'>
                        <Link to='/'><img className='splash-logo' src={window.yeplogo}></img></Link>
                        <SearchBar class={"business"}/>                       
                        <NavBarDropdown currentUser ={this.props.currentUser} logout={this.props.logout} icon={true} />
                       
                        
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
                                reviews = {reviews}
                                fetchReviews ={this.props.fetchReviews}                               
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